const User = require('./../Model/userModel');
const catchError = require('./../utils/catchError');
const jwt = require('jsonwebtoken');
const AppError = require('./../utils/appError');



const tokenSign = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const sendToken = (user, statusCode, res) => {
  const token = tokenSign(user._id);

  //Remove password from the output
  user.password = undefined;

  //Putting the token on the cookie
  res.cookie('JWT', token, {
    expires : new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
    httpOnly : true
  });

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};
exports.signup = catchError(async (req, res, next) => {
  
  const newUser = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.passwordConfirm,
    
  });
  
  sendToken(newUser, 201, res);
});





exports.login = catchError(async (req, res, next) => {
    //console.log(req.body);
  const { email, password } = req.body;
  // Check if the email and password exists
  if (!email || !password) {
    const err = new AppError('Please provide email and password!', 400);
    return next(err);
  }

  // Check if the user exist and password is correct
   const user = await User.findOne({ email: email }).select('+password');

  if (!user || !(await user.correctPassword(user.password, password))) {
    const err = new AppError('Please enter a valid email or password!', 400);
    return next(err);
  }
  
  sendToken(user, 200, res);
});

//AUTHENTICATION

exports.protect = catchError(async ( req, res, next) => {
  
  let token;
  //Get token to check if its still there

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.JWT) {
    token = req.cookies.JWT;
  }
  if (!token) {
    res.status(200).render('login', {
      Title: 'Log into your account',
    });
    /*const err = new AppError(
      'You not logged in! Please log in to access.',
      401
    );
    return next(err);*/
  }

  //verify the token
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);
  
  
  //Check if the user still exists
  let currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError('User belonging to this token no longer exist!'),
      401
    );
  }

  //GRANT ACCESS TO PROTECTED ROUTE
  //console.log(currentUser);

  req.user = currentUser;
  res.locals.user = currentUser;

  next();
});

//onlt to render pages no errors
exports.isLoggedIn = async (req, res, next) => {
  
  try {
    if (req.cookies.JWT) {
      //Verify the cookie
      
      const decoded = await jwt.verify(req.cookies.JWT, process.env.JWT_SECRET);
      
      //Check if the user still exists
      let currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return next();
      }
     
    //THERE IS A LOGGED IN USER
      
      res.locals.user = currentUser;
      req.user = currentUser;
      console.log(req.user);
      res.json(false);
      //return next();
    }
    
  } catch (err) {
    res.json(false);
  }
  
  //next();
};

//AUTHERIZATION

exports.restrictRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action!', 403)
      );
    }
    next();
  };
};


//LOG OUT
exports.logout = (req, res, next) => {
  res.cookie('JWT', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  
  res.status(200).json({
    status: 'success',
  });
};







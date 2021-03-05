const Doctor = require('./../Model/Doctor');
const catchError = require('./../utils/catchError');
const AppError = require('./../utils/appError');


exports.getAllDoc = catchError(async(req,res,next) => {

    const doctors = await Doctor.find();
    res.status(200).json({
        status: 'success',
        requestTime: req.requestTime,
        data: {
          data: doctors,
        },
      });

});
exports.getADoc = (req,res,next) => {

}
exports.createDoc = catchError( async(req,res,next) => {

    const sameDoc = await Doctor.find({Name: req.body.Name});
    if(sameDoc) {
        const err = new AppError('Same name doctor already exists!', 400);
        return next(err);
    }
    const newDoc = await Doctor.create({
      Name: req.body.name,
      Specialization: req.body.lname,
      Hospital: req.body.email,
      Notes : req.body.notes
      });

});
exports.getUserDoc = catchError(async(req,res,next) => {

 const userDoctors = await Doctor.find({User: req.user._id});
 res.status(200).json({
    status: 'success',
    requestTime: req.requestTime,
    data: {
      data: userDoctors,
    },
  });

})
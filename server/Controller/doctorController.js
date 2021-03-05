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
    console.log(req.body);
    //const sameDoc = await Doctor.find({Name: req.body.doctor});
    //if(sameDoc) {
      //  const err = new AppError('Same name doctor already exists!', 400);
        //return next(err);
   // }
    const newDoc = await Doctor.create({
      Name: req.body.doctor,
      Hospital: req.body.hospital,
      Specialization: req.body.specialization,
      Notes : req.body.notes
      });
      res.status(200).json({
        status: 'success',
        requestTime: req.requestTime,
    });

});
exports.getUserDoc = catchError(async(req,res,next) => {

 const userDoctors = await Doctor.find({User: req.user._id});
 res.status(200).json({
    status: 'success',
    requestTime: req.requestTime,
    data: userDoctors,
    
  });

})
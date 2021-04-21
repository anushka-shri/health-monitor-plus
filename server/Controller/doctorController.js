const Doctor = require('./../Model/Doctor');
const catchError = require('./../utils/catchError');
const AppError = require('./../utils/appError');
const Prescription = require('./../Model/prescription');
const labReports = require('./../Model/labReports');


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
exports.createDoc = async(req,res,next) => {
    console.log(req.body);
    const sameDoc = await Doctor.find({Name: req.body.doctor});
    if(sameDoc.length  !== 0) {
        res.status(200).json({
            status: 'failed',
            requestTime: req.requestTime,
        });
    }else{
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
 }
};
exports.getUserDoc = catchError(async(req,res,next) => {

 const userDoctors = await Doctor.find();
 res.status(200).json({
    status: 'success',
    requestTime: req.requestTime,
    data: userDoctors,
    
  });

})

exports.deleteDoctor = async(req,res,next) => {
  console.log(req.body);
  await Doctor.remove( { Name : { $in :req.body.deleteDoctor}});
  res.status(200).json({
    status: 'success',
  });
}
exports.getCounts = async (req, res, next) => {
	const docs = await Doctor.find();
	const docCount = docs.length;
	console.log(docCount);
	const prescriptions = await Prescription.find();
	const preCount = prescriptions.length;

	const lab = await labReports.find();
	const labCount = lab.length;

	res.status(200).json({
		status: 'success',
		data: {
			docCount,
			preCount,
			labCount,
		},
	});
};

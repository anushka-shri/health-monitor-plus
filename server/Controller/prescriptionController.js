const multer = require('multer');
const sharp = require('sharp');
const Doctor = require('../Model/Doctor');
const Prescription = require('./../Model/prescription');
var fs = require('fs');

const catchError = require('./../utils/catchError');
const AppError = require('./../utils/appError');





const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image') || file.mimetype.startsWith('application')) {
      cb(null, true);
    } else {
      cb(new AppError('Not an image or a pdf! please upload an image or a pdf file.', 400), false);
    }
  };

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadImages = upload.array('Prescription',10);

  exports.resizeImages = catchError(async (req, res, next) => {
      console.log(req.files);
    if (!req.files) return next();
    
  req.body.prescriptions = [];

  await Promise.all(
    req.files.map(async (file, i) => {
      const prescriptionFilename = `prescription-${req.user._id}-${Date.now()}-${
        i + 1
      }.jpeg`;

      await sharp(file.buffer)
        .resize(2000, 1333)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .withMetadata()
        .toFile(`public/${prescriptionFilename}`);

      req.body.prescriptions.push(prescriptionFilename);
      
    })
   );
   
next();
});

exports.createPrescription = catchError ( async(req,res,next) => {
    const doctor = await Doctor.findOne({Name: req.body.doctor});
    //console.log(doctor);
    if(!doctor){
        const err = new AppError('Doctor not found! Create a new doctor. ', 400);
        return next(err);
    }else{
        
      const newPrescreption = await Prescription.create({
      Title: req.body.Title,
      Prescription:req.body.prescriptions,
      Doctor: doctor._id,
      Notes: req.body.notes,
      DateOfRec: Date.now(),
      User : req.user._id
      
      });

    }
    res.status(200).json({
        status: 'success',
        requestTime: req.requestTime,
       });
});

exports.getUserPrescriptions = catchError(async(req,res,next) => {
  // if(req.query){
  //  const {startDate,endDate} = req.query;
  //   const userPrescription = Prescription.find({
  //     created_at: {
  //         $gte: startDate,
  //         $lt: endDate
  //     }
  // })
  // res.status(200).json({
  //   status: 'success',
  //   requestTime: req.requestTime,
  //   data: userPrescription,
    
  // });

  //}
  
  
  const userPrescription = await Prescription.find();
  res.status(200).json({
     status: 'success',
     requestTime: req.requestTime,
     data: userPrescription,
     
   });
  
 })
 exports.deletePres = async(req,res,next) => {
  console.log(req.body);
  await Prescription.remove( { Title : { $in :req.body.deletePres}});
  res.status(200).json({
    status: 'success',
  });
}


 
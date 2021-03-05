const multer = require('multer');
const sharp = require('sharp');
const Doctor = require('../Model/Doctor');
const Prescription = require('./../Model/prescription');

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
    if (!req.files.Prescriptions) return next();

  req.body.prescriptions = [];

  await Promise.all(
    req.files.Prescription.map(async (file, i) => {
      const prescriptionFilename = `prescription-${req.user._id}-${Date.now()}-${
        i + 1
      }.jpeg`;

      await sharp(file.buffer)
        .resize(2000, 1333)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .withMetadata()
        .toFile(``);

      req.body.Prescription.push(prescriptionFilename);
    })
  );
next();
});

exports.createPrescription = catchError ( async(req,res,next) => {
    const doctor = await Doctor.find({Name: req.body.Doctor});
    if(!doctor){
        const err = new AppError('Doctor not found! Create a new doctor. ', 400);
        return next(err);
    }else{
      const newPrescreption = await Prescription.create({
      Title: req.body.Title,
      Precription:req.body.Prescription,
      Doctor: req.body. Doctor,
      Hospital: req.body.Hospital,
      Notes: req.body.Notes,
      DateOfRec: req.body.Date
      
      });
    }
});
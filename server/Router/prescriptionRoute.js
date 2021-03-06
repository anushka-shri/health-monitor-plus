const express = require('express');
const authenticationController = require('./../Controller/authenticationController');
const prescriptionController = require('./../Controller/prescriptionController');

const router = express.Router();


router.post('/addNew',
prescriptionController.uploadImages,
prescriptionController.resizeImages,
prescriptionController.createPrescription,
);
module.exports = router;
const express = require('express');
const authenticationController = require('./../Controller/authenticationController');
const prescriptionController = require('./../Controller/prescriptionController');

const router = express.Router();


router.post('/addNew',
authenticationController.protect,
prescriptionController.uploadImages,
prescriptionController.resizeImages,
prescriptionController.createPrescription,
);
router.get('/getUserPrescription',prescriptionController.getUserPrescriptions);
router.post('/deletePres',prescriptionController.deletePres);

module.exports = router;
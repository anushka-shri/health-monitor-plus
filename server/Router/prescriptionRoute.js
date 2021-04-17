const express = require('express');
const authenticationController = require('./../Controller/authenticationController');
const prescriptionController = require('./../Controller/prescriptionController');

const router = express.Router();


router.post('/addNew',
authenticationController.isLoggedIn,
prescriptionController.uploadImages,
prescriptionController.resizeImages,
prescriptionController.createPrescription,
);
router.get('/getUserPrescription',prescriptionController.getUserPrescriptions);
module.exports = router;
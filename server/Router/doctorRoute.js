const express = require('express');
const authenticationController = require('./../Controller/authenticationController');
const doctorController = require('./../Controller/doctorController');


const router = express.Router();

router.post('/addNew', doctorController.createDoc);
router.get('/getcounts',authenticationController.protect ,doctorController.getCounts);
router.get('/getUserDoctor',doctorController.getUserDoc);
router.post('/deleteDoctors',doctorController.deleteDoctor);
module.exports = router;

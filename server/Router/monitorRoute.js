const express = require('express');
const authenticationController = require('./../Controller/authenticationController');
const monitorController = require('./../Controller/monitorController');


const router = express.Router();

//add personal monitoring details
router.post('/bloodPressure' ,monitorController.addBloodPressure);
router.post('/bloodGlucose', monitorController.addBloodGlucose);
router.post('/oxygenSaturation', monitorController.addOxygenSaturation);
//router.post('/allergies', authenticationController.protect, monitorController.addAllergies);
//router.post('/vaccination', authenticationController.protect, monitorController.addVaccinations);
//router.post('/familyHistory', authenticationController.protect, monitorController.addFamilyHistory);
//router.post('/heightandweight', authenticationController.protect, monitorController.addHeight);

//get personal monitoring details
router.get('/getBloodPressure',monitorController.getBp);
router.get('/getBloodPressure/morning',monitorController.getBpMorning);
router.get('/getBloodPressure/Evening',monitorController.getBpEvening);
router.get('/getGlucose',monitorController.getBloodGlucose);


module.exports = router;

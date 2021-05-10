const express = require('express');
const authenticationController = require('./../Controller/authenticationController');
const medicineController = require('./../Controller/medicineController');


const router = express.Router();


router.get('/getAllMedicines',authenticationController.protect, medicineController.getAllMedicines);
router.post('/getMedicine', authenticationController.protect, medicineController.getMedicine);
module.exports = router;

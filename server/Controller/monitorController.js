const User = require('./../Model/userModel');
const catchError = require('./../utils/catchError');
const jwt = require('jsonwebtoken');
const AppError = require('./../utils/appError');
const general = require('./generalController');

//importing models
const BloodPressure = require('./../Model/PersonalMonitor/BlooodPressure');
const Glucose = require('./../Model/PersonalMonitor/Glucose');
const O2Saturation = require('./../Model/PersonalMonitor/O2Saturation');

const Vaccine = require('./../Model/PersonalMonitor/Vaccine');
const Family = require('./../Model/PersonalMonitor/FamilyHistory');
const Height = require('./../Model/PersonalMonitor/HeightWeight');

// addd records
exports.addBloodPressure = general.createRecord(BloodPressure);
exports.addBloodGlucose = general.createRecord(Glucose);
exports.addOxygenSaturation = general.createRecord(O2Saturation);
exports.addVaccinations = general.createRecord(Vaccine);
exports.addFamilyHistory = general.createRecord(Family);
exports.addHeight = general.createRecord(Height);

//get records
exports.getBloodGlucose = general.getRecord(Glucose);
exports.getBp = general.getRecord(BloodPressure);

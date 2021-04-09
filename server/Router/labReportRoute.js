const express = require('express');
const authenticationController = require('./../Controller/authenticationController');
const labReportController = require('./../Controller/labReportController');

const router = express.Router();


router.post('/addNew',
labReportController.uploadImages,
labReportController.resizeImages,
labReportController.createReport,
);
module.exports = router;
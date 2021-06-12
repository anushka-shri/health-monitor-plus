const express = require('express');
const authenticationController = require('../Controller/authenticationController');
const  dialogController = require('./../Controller/dialogController');



const router = express.Router();

router.post('/textQuery', authenticationController.protect,dialogController.textQuery);
router.post('/eventQuery', authenticationController.protect,dialogController.eventQuery);



module.exports = router;

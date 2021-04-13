const express = require('express');
const authenticationController = require('../Controller/authenticationController');
const  eventController = require('./../Controller/eventController');



const router = express.Router();

router.post('/addEvent', eventController.createEvent);


module.exports = router;

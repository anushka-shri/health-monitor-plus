const express = require('express');
const authenticationController = require('../Controller/authenticationController');
const  eventController = require('./../Controller/eventController');



const router = express.Router();

router.post('/addEvent', eventController.createEvent);
router.get('/getEvent', eventController.getEvent);
//router.delete('/deleteEvent',eventController.deleteEvent);


module.exports = router;

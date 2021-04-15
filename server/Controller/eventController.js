const general = require('./generalController');
const Event = require('./../Model/EventsModel');

exports.createEvent = general.createRecord(Event);
exports.getEvent = general.getRecord(Event);
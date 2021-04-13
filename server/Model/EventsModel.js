const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    type :{
       type: String,
       required: [ true ,"A type must be provided"],
    },
    DateAndTime: {
        type: Date,
    },
    Doctor:{
        type: String
    },
    Specialization:{
        type: String
    },
    Medication:{
        type: String
    },
    dosage:{
        type: Number
    },
    FromDate:{
        type: Date
    },
    EndDate:{
        type: Date
    },
    Repeat:{
        type: String
    },
    RepeatDays:{
        type : Number
    },
    EndRepeat:{
        type: String
    },
    Notes: {
        type : String
    }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;


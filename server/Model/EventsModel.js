const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    //type :{
       //type: String,
       //required: [ true ,"A type must be provided"],
    //},
    title: {
        type: String,
    },
    description:{
        type : String
    },
    //Doctor:{
       // type: String
    //},
   //Specialization:{
        //type: String
    //},
    //Medication:{
        //type: String
    //},
    //dosage:{
        //t/ype: Number
    //},
    startDate:{
        type: Date
    },
    endDate:{
        type: Date
    },
    //Repeat:{
       // type: String
    //},
    //RepeatDays:{
        //type : Number
    //},
    //EndRepeat:{
        //type: String
    //},
    //Notes: {
       //type : String
    //}
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;


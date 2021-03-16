// Systolic //Diastolic // Pulse //Date // time  //Notes

const mongoose = require('mongoose');

const BPSchema = new mongoose.Schema({
    Systolic : {
        type: Number,
        required: [ true ,"A systolic blood pressure is required"],
    },
    Diastolic : {
        type: Number,
        required: [true,"A diastolic blood pressure is required"],
    },
    Pulse : {
        type: Number,
        required: [true,"A pulse is required"],
    },
    DateOfRec : {
        type: Date,
    }
    
    /*User : {
        type : mongoose.Schema.ObjectId,
        ref : "User",
        required : [true, "Blood pressure must belong to some user"]
    }*/

});

const BloodPressure = mongoose.model('BloodPressure', BPSchema);

module.exports = BloodPressure;


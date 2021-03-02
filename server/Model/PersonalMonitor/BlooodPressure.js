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
    DateOfRec : {
        type: Date,
    },
    TimeOfRec : {
        type : Date,
    },
    Notes : {
        type: String,
        minlength: 1,
        maxlength: 30,
    },
    User : {
        type : mongoose.Schema.ObjectId,
        ref : "User",
        required : [true, "Blood pressure must belong to some user"]
    }

});

const BloodPressure = mongoose.model('BloodPressure', BPSchema);

module.exports = BloodPressure;


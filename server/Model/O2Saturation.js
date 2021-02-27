const mongoose = require('mongoose');

const saturationSchema = new mongoose.Schema({
    Result : {
        type: Number,
        required: [ true ,"A oxygen saturation is required"],
    },
    Pulse: {
        type: Number,
        required: [true,"A pulse is required"],
    },
    DateOfRec: {
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

const Saturation = mongoose.model('Saturation', saturationSchema);

module.exports = Saturation;


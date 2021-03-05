const mongoose = require('mongoose');
const User = require('./userModel');
const Doctor = require('./Doctor');

const presiptionSchema = new mongoose.Schema({
    Title:{
      type : String,
      required: [true, "A title  is required "]
    },
    Prescription : [String],
    Doctor : {
        type : mongoose.Schema.ObjectId,
        ref : "Doctor",
        required: [true, "A doctor name is required "]
    },
    Hospital : {
        type : String,
        required: [true, "A Hospital name is required "]
    },
    Notes: {
        type: String,
        minlength: 1,
        maxlength: 30,
        
    },
    DateOfRec : {
        type: Date,
    },
    User : {
        type : mongoose.Schema.ObjectId,
        ref : "User",
        required : [true, "Prescription must belong to some user"]
    }

});

const Prescription = mongoose.model('Presciption', presiptionSchema);

module.exports = Prescription;


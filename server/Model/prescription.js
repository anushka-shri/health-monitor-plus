const mongoose = require('mongoose');

const presiptionSchema = new mongoose.Schema({
    DocName : {
        type: String,
        required: [ true ,"A document name is required"],
    },
    Notes: {
        type: String,
        minlength: 1,
        maxlength: 30,
        
    },
    DateOfRec : {
        type: Date,
    },
    TimeOfRec : {
        type : Date,
    },
    User : {
        type : mongoose.Schema.ObjectId,
        ref : "User",
        required : [true, "Blood pressure must belong to some user"]
    }

});

const Prescription = mongoose.model('Presciption', presiptionSchema);

module.exports = Prescription;


const mongoose = require('mongoose');

const vaccineSchema = new mongoose.Schema({
    Name : {
        type: String,
        
        required: [ true ,"A name for vaccine is required"],
    },
    Doctor: {
        type: mongoose.Schema.ObjectId,
        ref: 'Doctor',
        required : [true , "A doctor for vaccine is required"],
    },
    DateOfVaccine: {
        type: Date,
    },
    User : {
        type : mongoose.Schema.ObjectId,
        ref : "User",
        required : [true, "Blood pressure must belong to some user"]
    }

});

const Vaccine = mongoose.model('Vaccine', vaccineSchema);

module.exports = Vaccine;


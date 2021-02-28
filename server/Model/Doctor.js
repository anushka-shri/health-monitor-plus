const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    Name : {
        type: String,
        required: [ true ,"A doctor name must be provided"],
    },
    Specialization: {
        type: String,
        required: [true,"A specialization must be provided"],
    },
    Hospital: {
        type : String,
    },
    Notes : {
        type: String,
        minlength: 1,
        maxlength: 30,
    },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;


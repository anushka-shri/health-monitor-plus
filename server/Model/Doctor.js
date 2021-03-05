const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    Name : {
        type: String,
        required: [ true ,"A doctor name must be provided"],
    },
    Hospital: {
        type : String,
    },
    Specialization: {
        type: String,
        required: [true,"A specialization must be provided"],
    },
    Notes : {
        type: String,
        minlength: 1,
        maxlength: 30,
    },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;


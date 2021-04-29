const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    Drug_Name : {
        type: String,
        required: [ true ,"A drug name must be provided"],
    },
    Reason: {
        type : String,
        required: [ true ,"A reason must be provided"],
    },
    Description: {
        type: String,
       
    },
    Average_rating:{
        type:Number
    }
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;


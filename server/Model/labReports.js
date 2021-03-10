const mongoose = require('mongoose');

const labSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: [ true ,"A document name is required"],
    },
    Doctor: {
        type : mongoose.Schema.ObjectId,
        ref : "Doctor",
        required: [true, "A doctor name is required "]
    },
    Report : [{
        type: String
        }],
    Notes: {
            type: String,
            minlength: 1,
            maxlength: 30,
            
        },
    DateOfRec : {
        type: Date,
    }
    /*User : {
        type : mongoose.Schema.ObjectId,
        ref : "User",
        required : [true, "Lab report must belong to some user"]
    }*/

});

const Lab = mongoose.model('Lab', labSchema);

module.exports = Lab;


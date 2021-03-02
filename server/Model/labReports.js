const mongoose = require('mongoose');

const labSchema = new mongoose.Schema({
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
        required : [true, "Lab report must belong to some user"]
    }

});

const Lab = mongoose.model('Lab', labSchema);

module.exports = Lab;


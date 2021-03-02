const mongoose = require('mongoose');

const heightSchema = new mongoose.Schema({
    Height : {
        type: Number,
        required: [ true ,"Height is required"],
    },
    Weight: {
        type: Number,
        required: [ true ,"Weight is required"],
    },
    DateOfRec : {
        type: Date,
    },
    User : {
        type : mongoose.Schema.ObjectId,
        ref : "User",
        required : [true, "Must belong to some user"]
    }

});

const Height = mongoose.model('Height', heightSchema);

module.exports = Height;


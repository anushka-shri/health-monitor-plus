const mongoose = require('mongoose');

const allergiesSchema = new mongoose.Schema({
    Name : {
        type: String,
        required: [ true ,"Name of the allergy is required"],
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

const Allergies = mongoose.model('Allergies', allergiesSchema);

module.exports = Allergies;


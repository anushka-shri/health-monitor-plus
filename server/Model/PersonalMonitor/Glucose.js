const mongoose = require('mongoose');

const GlucoseSchema = new mongoose.Schema({
    Type : {
        type: String,
        enum: ['Fasting', 'Postprandial', 'Random'],
        required: [ true ,"A type for sugar is required"],
    },
    Result: {
        type: Number,
        required: [true,"A value is required"],
    },
    DateOfRec: {
        type: Date,
    },
    TimeOfRec : {
        type : Date,
    },
    Notes : {
        type: String,
        minlength: 1,
        maxlength: 30,
    },
    User : {
        type : mongoose.Schema.ObjectId,
        ref : "User",
        required : [true, "Blood pressure must belong to some user"]
    }

});

const Glucose = mongoose.model('Glucose', GlucoseSchema);

module.exports = Glucose;


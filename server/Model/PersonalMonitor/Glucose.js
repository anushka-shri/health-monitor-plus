const mongoose = require('mongoose');

const GlucoseSchema = new mongoose.Schema({
    Type : {
        type: String,
        enum: ['fasting', 'Postprandial', 'Random'],
        required: [ true ,"A type for sugar is required"],
    },
    Result: {
        type: Number,
        required: [true,"A value is required"],
    },
    DateOfRec: {
        type: Date,
    },
    
    /*User : {
        type : mongoose.Schema.ObjectId,
        ref : "User",
        required : [true, "Blood pressure must belong to some user"]
    }*/

});

const Glucose = mongoose.model('Glucose', GlucoseSchema);

module.exports = Glucose;


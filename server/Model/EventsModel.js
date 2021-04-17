const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    //type :{
       //type: String,
       //required: [ true ,"A type must be provided"],
    //},
    title: {
        type: String,
    },
    description:{
        type : String
    },
    //Doctor:{
       // type: String
    //},
   //Specialization:{
        //type: String
    //},
    //Medication:{
        //type: String
    //},
    //dosage:{
        //t/ype: Number
    //},
    startDate:{
        type: Date
    },
    endDate:{
        type: Date
    },
    startTime:{
        type: Date
    },
    endTime:{
        type: Date
    },
    freq:{
        type:String
    },
    count:{
        type:String
    },
    rRule:{
        type: String
    },
    checked: {
        type: Object
    },
    allDay:{
        type:Boolean
    }
    //Repeat:{
       // type: String
    //},
    //RepeatDays:{
        //type : Number
    //},
    //EndRepeat:{
        //type: String
    //},
    //Notes: {
       //type : String
    //}
});


eventSchema.pre('save', function (next) {
    console.log(this);
    if(this.freq && this.count){
    var freq = this.freq;
    var count = this.count;
    this.rRule = `FREQ=${freq};COUNT=${count}`;
    }
    if(this.checked){
        var allDay = this.checked.checkedA;
        this.allDay = allDay;
    }
    next();
    
  });
  



const Event = mongoose.model('Event', eventSchema);

module.exports = Event;


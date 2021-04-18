const express = require('express');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRouter = require('./Router/userRoute');
const monitorRoute = require('./Router/monitorRoute');
const prescriptionRoute = require('./Router/prescriptionRoute');
const doctorRoute = require('./Router/doctorRoute');
const labReportRoute = require('./Router/labReportRoute');
const eventsRoute = require('./Router/eventsRoute');
const path = require('path');
// const brain = require('brain.js');
// const data = require('./Machine Learning/data.json');

// const fs = require('fs');

const app = express();

app.use(cors({
  origin:["http://localhost:3000"],
  credentials:true,
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

// app.use((req, res, next) => {
 
// // create a simple feed forward neural network with backpropagation
//   const net = new brain.recurrent.LSTM();
   
//   //var objs = JSON.parse(data);
//   const obj = JSON.parse(fs.readFileSync(`${__dirname}/Machine Learning/data.json`, `utf-8`));
  
//  const trainData = obj.map(item =>(
//     {
//       input:[item.Symptom_1,item.Symptom_2,item.Symptom_3,item.Symptom_4,item.Symptom_5,item.Symptom_6,item.Symptom_7,item.Symptom_8,item.Symptom_9,item.Symptom_10,item.Symptom_11,item.Symptom_12,item.Symptom_13,item.Symptom_14,item.Symptom_15,item.Symptom_16,item.Symptom_17],
//         //Symptom_4,item.Symptom_5,item.Symptom_6,item.Symptom_7,item.Symptom_8,item.Symptom_9,item.Symptom_10,item.Symptom_11,item.Symptom_12,item.Symptom_13,item.Symptom_14,item.Symptom_15,item.Symptom_16,item.Symptom_17],
//       //input:['happy','sad'],
//       output: [item.Disease],
//     }
//   ));
 
//   // const trainData = [
//   //   {input:'I am happy', output:'happy'},
//   //   {input:'I am sad', output:'sad'},
//   //   {input:'what a pill' , output:'sarcastic'}
//   // ];
// //console.log(trainData);
//   net.train(trainData,{
//     iterations:200,
//     //log:(stats) => console.log(stats)
//   });

//   //const output = net.run(['happy']);
//   const output = net.run(['itching','skin_rash','nodal_skin_eruptions',"dischromic _patches"
// ]);
//   console.log(output);
//   next();
// });









//Mounting our new routers to app on a specified route

app.use("/api/v1/users",userRouter);
app.use("/api/v1/monitor",monitorRoute);
app.use("/api/v1/prescription",prescriptionRoute);
app.use("/api/v1/doctors",doctorRoute);
app.use("/api/v1/lapReports",labReportRoute);
app.use("/api/v1/events",eventsRoute);




module.exports = app;
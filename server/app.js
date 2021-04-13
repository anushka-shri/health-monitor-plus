const express = require('express');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRouter = require('./Router/userRoute');
const monitorRoute = require('./Router/monitorRoute');
const prescriptionRoute = require('./Router/prescriptionRoute');
const doctorRoute = require('./Router/doctorRoute');
const labReportRoute = require('./Router/labReportRoute');
const eventsRoute = require('./Router/eventsRoute');




const app = express();



app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

app.use(cors({
  origin:["http://localhost:3000"],
  credentials:true,
}));







//Mounting our new routers to app on a specified route
app.use("/api/v1/users",userRouter);
app.use("/api/v1/monitor",monitorRoute);
app.use("/api/v1/prescription",prescriptionRoute);
app.use("/api/v1/doctors",doctorRoute);
app.use("/api/v1/lapReports",labReportRoute);
app.use("/api/v1/events",eventsRoute);




module.exports = app;
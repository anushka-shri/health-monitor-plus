const express = require('express');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRouter = require('./Router/userRoute');
const monitorRoute = require('./Router/monitorRoute');
const prescriptionRoute = require('./Router/prescriptionRoute');
const doctorRoute = require('./Router/doctorRoute');
const labReportRoute = require('./Router/labReportRoute');
const eventsRoute = require('./Router/eventsRoute');
const dialogRoute = require('./Router/dialogRouter');
const path = require('path');


const app = express();

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE',
	);
	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-Requested-With,content-type',
	);
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});
app.use(cors({
  origin:["http://localhost:3000"],
  credentials:true,
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());


app.use("/api/v1/users",userRouter);
app.use("/api/v1/monitor",monitorRoute);
app.use("/api/v1/prescription",prescriptionRoute);
app.use("/api/v1/doctors",doctorRoute);
app.use("/api/v1/lapReports",labReportRoute);
app.use("/api/v1/events",eventsRoute);
app.use("/api/v1/dialogFlow",dialogRoute);





module.exports = app;
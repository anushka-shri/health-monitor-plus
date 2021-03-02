const express = require('express');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRouter = require('./Router/userRoute');
const monitorRoute = require('./Router/monitorRoute');




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



module.exports = app;
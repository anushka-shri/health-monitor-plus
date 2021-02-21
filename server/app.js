const express = require("express");

const userRouter = require('./Router/userRoute');


const app = express();



//Body parser
app.use(express.json({ limit: "10kb" }));
//cookie parser
app.use(cookieParser());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.cookies);
  next();
});


//Mounting our new routers to app on a specified route
app.use("/api/v1/users",userRouter);

module.exports = app;
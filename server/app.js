<<<<<<< HEAD
const express = require("express");

const cors = require("cors");

const cookieParser = require("cookie-parser");



=======
const express = require('express');
const cors = require("cors");
const cookieParser = require("cookie-parser");
>>>>>>> 0c8189795fcf0b73b8d2e4bc3223854e2ff56fe0
const userRouter = require('./Router/userRoute');




const app = express();



<<<<<<< HEAD


//Body parser

app.use(express.json({​​ limit: "10kb" }​​));

//cookie parser

app.use(cookieParser());

app.use(cors({​​

  origin:["http://localhost:3000"],

  credentials:true,

}​​));

app.use((req, res, next) => {​​

  req.requestTime = new Date().toISOString();

  console.log(req.cookies);

  next();

}​​);
=======
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

app.use(cors({
  origin:["http://localhost:3000"],
  credentials:true,
}));



>>>>>>> 0c8189795fcf0b73b8d2e4bc3223854e2ff56fe0




//Mounting our new routers to app on a specified route
<<<<<<< HEAD

=======
>>>>>>> 0c8189795fcf0b73b8d2e4bc3223854e2ff56fe0
app.use("/api/v1/users",userRouter);



module.exports = app;
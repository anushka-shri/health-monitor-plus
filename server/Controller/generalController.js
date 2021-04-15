const User = require('../Model/userModel');
const catchError = require('../utils/catchError');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');

exports.createRecord=(Model) =>
catchError(async (req, res, next) => {
    console.log(req.body);
    const newDoc = await Model.create(req.body);
    res.status(201).json({
      status: 'success',
      
    });
});

exports.getMorningRecord=(Model) => 
catchError(async (req,res,next) => {
const records = await Model.find({Time:"morning"});
res.status(201).json({
  status: 'success',
  records
  
});

})

exports.getEveningRecord=(Model) => 
catchError(async (req,res,next) => {
  const records = await Model.find({Time:"Evening"});
  res.status(201).json({
    status: 'success',
    records
    
  });
  
  
})



exports.getRecord = (Model) => 
  catchError(async (req, res, next) => {
    
    const records = await Model.find();
    res.status(201).json({
      status: 'success',
      records
      
    });
});






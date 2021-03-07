const User = require('../Model/userModel');
const catchError = require('../utils/catchError');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');

exports.createRecord=(Model) =>
catchError(async (req, res, next) => {
    
    const newDoc = await Model.create(req.body);
    res.status(201).json({
      status: 'success',
      
    });
});





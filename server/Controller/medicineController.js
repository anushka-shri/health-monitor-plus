const Medicine = require('./../Model/Medicine');
const User = require('./../Model/userModel');
exports.getAllMedicines = async(req,res,next) => {

    const medicines = await Medicine.find().limit(100);
    res.status(200).json({
       status: 'success',
       requestTime: req.requestTime,
       data: medicines,
       
     });
   
}

exports.getMedicine = async(req,res,next) => {
    console.log(req.body);
    const drug =  req.body.drugName;
    const medicine = await Medicine.findOne({Drug_Name : drug});
    
    const similarMedicine = await Medicine.find({ $and: [ { Reason: medicine.Reason }, { Description: medicine.Description } ] });
    res.status(200).json({
       status: 'success',
       requestTime: req.requestTime,
       data: medicine,
       similar:similarMedicine
       
     });
   
}
exports.getUserMedicine = async(req,res,next) => {

  const user_id = req.user._id;
  const user = await User.findById(user_id);
  res.status(200).json({
    status: 'success',
    requestTime: req.requestTime,
    data: user,
    
  });



}
exports.addMedicine = async(req,res,next) => {
  console.log(req.body);
  const user_id = req.user._id;
  await User.updateOne(
    { _id: user_id },
    { $push: { myMedicines: req.body.id } }
 )
 
}
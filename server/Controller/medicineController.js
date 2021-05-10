const Medicine = require('./../Model/Medicine');

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

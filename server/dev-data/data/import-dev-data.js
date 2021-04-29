const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs');
const Medicine = require('./../../Model/Medicine');


dotenv.config({ path: './config.env' });
const database = 'mongodb+srv://soha:<PASSWORD>@cluster0.bzk52.mongodb.net/healthPlus?retryWrites=true&w=majority';
//set by node.js, express automatically sets env to development
const DB = database.replace(
  '<PASSWORD>',
  '6GrwdzcFtbj3PSUg'
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successful DB connection!');
  });

const medicines = JSON.parse(fs.readFileSync(`${__dirname}/csvjson.json`, `utf-8`));


//IMPORT DATA INTON DATABASE

const importData = async () => {
  try {
    await Medicine.create(medicines);
    

    console.log('Successfully added data to db!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
const addField = async () => {
    try{
        await Medicine.updateMany({}, {"Average_rating": 3} ,{
            
            });
        console.log('Data in db added!');
    }catch(err){
        console.log(err);
    }
    process.exit();
}

const deleteData = async () => {
  try {
    await Medicine.deleteMany();
    
    console.log('Data in db deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}else if (process.argv[2] === '--add') {
    addField();
  }

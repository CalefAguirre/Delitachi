const mongoose = require('mongoose');
const path = require('path');
const uri = require(__dirname + '/uri');

const connectDB = async () => {
  await mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    }
  ).catch(function(err,req,res,next){
    res.send({error: err.message});
    console.log(err.message);
  });
  console.log('db connected');
};

module.exports = connectDB;

//catch(function(err,req,res,next){
//res.send({error: err.message});
//});

//

const mongoose = require('mongoose');
const path = require('path');
const uri = require(__dirname + '/uri');

const connectDB = async () => {
  await mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    });
  console.log('db connected');
};

module.exports = connectDB;

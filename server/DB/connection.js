const mongoose = require('mongoose');
const uri = require('./server/DB/uri');

const connectDB = async () => {
  await mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    });
  console.log('db connected');
};

module.exports = connectDB;

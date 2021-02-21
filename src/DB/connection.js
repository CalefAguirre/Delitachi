const mongoose = require("mongoose");
const uri = "mongodb+srv://AguirreCalef:4bGtXg4tGIZEGjB4@cluster0.3v3xb.mongodb.net/Delitachi?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(uri, {
    useUnifiedTopology: true;
    useNewUrlParser: true;})
    .then(db => console.log("db connected"))
    .catch(err => console.log(err));
};

module.exports = connectDB;

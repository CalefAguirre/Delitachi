const http = require("http");
const path = require("path");
const express = require("express");
const socketio = require("socket.io");
const mongoose = require("mongoose");

//initializing server and sockets
const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

//connections to the Server
  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://AguirreCalef:4bGtXg4tGIZEGjB4@cluster0.3v3xb.mongodb.net/Delitachi?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });
  //mvd 2 cnntn
  const connectDB = async () => {
    await mongoose.connect(uri, {useUnifiedTopology: true; useNewUrlParser: true;})
      .then(db => console.log("db connected"))
      .catch(err => console.log(err));
  }

//settings
app.set("port", process.env.PORT || 3000);

//static files
app.use(express.static('src/public'));

//sockets
require("./sockets")(io);

//starting the server
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});

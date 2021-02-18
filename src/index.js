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
mongoose.connect("mongodb://") //let's fix this 2MR
  .then(db => console.log("db connected"))
  .catch(err => console.log(err));

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
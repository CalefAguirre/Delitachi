const express = require('express');
//const socketio = require('socket.io');
const mongoose = require('mongoose');

const http = require('http');
const path = require('path');

//initializing server
const app = express();
const server = http.createServer(app);
//const io = socketio.listen(server);

//connections to the Server
const connectDB = require('./DB/connection');
connectDB();

//settings
app.set('port', process.env.PORT || 3000);

//static files
app.use(express.static(
  path.join(__dirname, 'public')
  ));

//listening the server
app.listen(app.get('port'), () => {
  console.log(`server started on port ${app.get('port')}`);
});

const express = require('express');
const socketio = require('socket.io');
const mongoose = require('mongoose');

const http = require('http');
const path = require('path');

//initializing server
const app = express();
const server = http.createServer(app);

//websockets
const io = socketio(server);

io.on('connection', () => {
  console.log('new connection');
});

//connections to the Server
const connectDB = require('./server/DB/connection');
connectDB();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares


//routes


//static files
app.use(express.static(
  path.join(__dirname, 'public')
  ));

//listening the server
app.listen(app.get('port'), () => {
  console.log(`server started on port ${app.get('port')}`);
});

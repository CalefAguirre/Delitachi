const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const morgan = require('morgan');
const socketio = require('socket.io');

const http = require('http');
const path = require('path');

//const exphbs = require('express-handlebars');
//const methodOverride = require('method-override');
//const session = require('express-session');

// Initializations
const app = express();
const server = http.createServer(app);

// Settings
app.set('port', process.env.PORT || 3000);
//app.set('views', (__dirname + 'views'));
//app.engine('.hbs', exphbs({

//}));

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// Websockets
const io = socketio(server);

io.on('connection', () => {
  console.log('new connection');
});

// Connections to the Server
const connectDB = require(__dirname + '/DB/connection');
connectDB();

// Routes
//app.use('/api', require(__dirname + '/routes/api'));

//error handling middleware
app.use(function(err,req,res,next){
  //console.log(err);
  res.status(422).send({error: err.message});
})

//static files
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/img'));

//listening the server
app.listen(app.get('port'), () => {
  console.log(`server started on port ${app.get('port')}`);
});

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const morgan = require('morgan');
const socketio = require('socket.io');

const http = require('http');
const path = require('path');

const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

// Initializations
const app = express();
const server = http.createServer(app);

// Settings
const PORT = process.env.PORT || 3000;
app.set('views', path.join('.','src','views'));
app.engine('.hbs', exphbs({

}));

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// Websockets
const io = socketio(server);

io.on('connection', () => {
  console.log('new connection');
});

// Connections to the Server
const connectDB = require('../server/DB/connection');
connectDB();

// Routes
app.use('/api', require('../src/routes/api'));

//error handling middleware
app.use(function(err,req,res,next){
  //console.log(err);
  res.status(422).send({error: err.message});
})

//static files
app.use(express.static(path.join('.','src','public')));
app.use(express.static(path.join('.','src','public','img')));

//listening the server
  console.log('server started on port ' + PORT);

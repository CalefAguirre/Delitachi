//initializing server
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("src/DB/connection");
const http = require("http");

const app = express();
const server = http.createServer(app);

//connections to the Server
connectDB();

//settings
app.set("port", process.env.PORT || 3000);

//static files
app.use(express.static('src/public'));

//listening the server
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});

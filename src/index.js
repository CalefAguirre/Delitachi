//initializing server
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./DB/connection");

const http = require("http");
const app = express();
const server = http.createServer(app);

//connections to the Server
connectDB();

//connections with server
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://AguirreCalef:4bGtXg4tGIZEGjB4@cluster0.3v3xb.mongodb.net/Delitachi?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});

//settings
app.set("port", process.env.PORT || 3000);

//static files
app.use(express.static('src/public'));

//listening the server
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});

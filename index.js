const http = require('http');
const express = require("express");
//const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.end("works!");
});

app.listen(3000, () => {
  console.log("server initiated");
});

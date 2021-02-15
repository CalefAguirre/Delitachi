const http = require('http');
const express = require("express");
const app = express();

app.use(express.static('src/public'));
//app.get('/', (req, res) => {
//    res.sendFile(__dirname+'/src/public/index.html');
//});
app.listen(3000, () => {
  console.log("server initiated");
});

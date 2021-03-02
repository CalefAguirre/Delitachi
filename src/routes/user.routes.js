const express = require('express');
const router = express.Router();

router.get('/user',function(req,res){
  res.send('hello, this is user page');
});

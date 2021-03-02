const express = require('express');
const router = express.Router();

router.get('/recipes',function(req,res){
  res.send('hello, this is recipes page');
});

router.get('/recipes/:id',function(req,res){
  res.send('hello, the id is:' + id);
});

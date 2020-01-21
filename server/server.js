const express = require('express');
const bodyParse  = require('body-parser');
const cars = require('cars');
const PORT = 3000;


const app = express();

app.use(bodyParse.json());
//app.use(cars());
app.get('/',function(req,res){
    res.send('hello from server');
});

app.post('/post',function(req,res){
    console.log(req.body);
    res.status(200).send({"message":"data got"});
});
app.listen(PORT,function(){
    console.log('server is running');
});
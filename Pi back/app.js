var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose');
var path = require("path");
const url="mongodb://localhost/PiDB";
var cors = require("cors");


var app = express();
mongoose.connect(url,{useNewUrlParser:true});

const con = mongoose.connection
con.on('open',()=>{
  console.log('connected to DB')
})
app.listen(8081,()=>{
  console.log('Server Started')
});
app.use(express.json())
const itemRouter=require('./routes/items')
app.use('/items',itemRouter);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "uploads")));
app.use(cors());




module.exports = app;

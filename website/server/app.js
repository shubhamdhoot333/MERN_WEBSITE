const mongoose = require('mongoose'); 
const express = require('express');
const dotenv =require('dotenv');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
dotenv.config({path:'./config.env'});

const PORT = process.env.PORT;
require('./db/conn');
app.use(express.json());
app.use(require('./router/auth'));

app.get("/",(req,res)=>{
    res.send('Hello login world');
});


//app.get("/About",(req,res)=>{
  //  res.send('Hello login world');
//});
app.get("/Contact",(req,res)=>{
    res.send('Hello login world');
});

app.get("/login",(req,res)=>{
    res.send('Hello login world');
});

app.get('/register',(req,res)=>{
    res.send('Hello register world');
});

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
});
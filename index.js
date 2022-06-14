const express = require("express");
const app = express();
const fs =require ('fs')
const verif_date=require('./checkTime')

const PORT = 3030;

app.get('/home',verif_date,(req,res)=>{
    fs.readFile('./Home.html','utf-8',(err,data)=>{
err?console.log('fama mochkol'):res.end(data)
    })
})

app.get('/AboutUs',verif_date,(req,res)=>{
    fs.readFile('./aboutUs.html','utf-8',(err,data)=>{
err?console.log('fama mochkol'):res.end(data)
    })
})

app.get('/OurService',verif_date,(req,res)=>{
    fs.readFile('./ourService.html','utf-8',(err,data)=>{
err?console.log('fama mochkol'):res.end(data)
    })
})

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`server is running on port ${PORT}...`);
});


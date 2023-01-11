const express=require('express')
const path=require('path')
const bodyParser=require('body-parser')
const qs=require('querystring')
const methodOverride=require('method-override')
const axios = require('axios')
const app=express();
const homeRoute=require('./routes/home')
const adminRoute=require('./routes/admin')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      var method = req.body._method
      delete req.body._method
      return method
    }
  }))

app.use('/',homeRoute)
app.use('/admin',adminRoute)

//404 Error
app.use((req,res,next)=>{
    res.send("Not found");
    next();
})

app.listen(3000,()=>console.log("server is running ...."))
const { Router } = require('express');
const express=require('express')
const path=require('path')
const route=express.Router();


route.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/index.html'))
})

route.route('/contact-us')
        .get((req,res)=>{
            res.sendFile(path.join(__dirname,'../views/contact-us.html'))
        })
        .post((req,res)=>{
            res.send(req.body.t1)
        })
        .delete((req,res)=>{
            res.send("this method is delete")
        })

route.get('/articles/:id',(req,res)=>{
    res.send(req.params)
})

module.exports=route

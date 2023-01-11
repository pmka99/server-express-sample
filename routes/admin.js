const express=require('express')
const path=require('path')

const route=express.Router();

route.get('/',(req,res)=>{
    res.send("this is admin page")
})

module.exports=route;
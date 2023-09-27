const express = require('express');
const mongoose = require('mongoose');
const server = require('../model/model');
mongoose.connect(process.env.MONGODB)
async function getCount(req,resp){
    console.log(req.query)
        const id=req.query.id;
        const shortUrl=await server.findOne({id:id})
        if(shortUrl==null){
            resp.json({sucess:false})
        }
        else{
            resp.json({sucess:true,count:shortUrl.count})
        }
}
module.exports=getCount;

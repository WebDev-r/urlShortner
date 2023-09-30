const express = require('express');
const mongoose = require('mongoose');
const server = require('../model/model');
mongoose.connect(process.env.MONGODB)
async function getShortUrl(req,resp){
    console.log(req.query)
        const id=req.query.id;
        const shortUrl=await server.findOne({id:id})
        if(shortUrl==null){
            resp.send(`<h1>link does,t exist, create short url and try again.</h1>`)
        }
        else{
            await server.updateOne({id:id},{count:shortUrl.count+1})
          resp.redirect(`https://${shortUrl.url}`)
        }
}
module.exports=getShortUrl;

const mongoose = require('mongoose');
const server= require('../model/model');
mongoose.connect(process.env.MONGODB)
async function converToShortUrl(req,resp){
        const url=req.body.url;
        const shortUrl=await server.findOne({url:url})
        if(shortUrl==null){
                 let id;
                 await server.countDocuments().then((count)=>{
                  id=count;
            })
                 await server.create({url:url,count:0,id:id})
                 resp.json({ctrated:true,shortUrl:`${req.hostname}/?id=${id}`,count:0})
        }
        else{
              resp.json({created:false,shortUrl:`${req.hostname}/?id=${shortUrl.id}`,count:shortUrl.count})
        }
}
module.exports=converToShortUrl

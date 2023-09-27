const mongoose = require('mongoose');
const {Schema}=mongoose
const urlSchema=new Schema({url:{type:String,required:true},count:Number,id:Number})
const server =mongoose.model("Shortner",urlSchema)
module.exports=server;
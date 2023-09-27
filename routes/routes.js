const express = require('express');
const converToShortUrl=require('../components/convertToShortUrl');
const shortUrl=require('../components/getShortUrl');
const getCount=require('../components/getCount')
const url=express();
url.get("/",shortUrl);
url.post("/",converToShortUrl);
url.get('/getcount',getCount);
module.exports=url;
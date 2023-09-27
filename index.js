const express=require('express');
const app=express();
const urlShortner = require('./routes/routes');
const port=3000||process.env.PORT
const cors=require('cors')
app.use(cors())
app.use(express.json())
app.use('/url',urlShortner)
app.post('/',(req,resp)=>{
    resp.json({"server":"is working"})
})
app.listen(port,()=>{console.log("server sterted")})

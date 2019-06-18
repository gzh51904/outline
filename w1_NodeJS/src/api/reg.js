const express = require('express');

const Router = express.Router();

Router.post('/',(req,res)=>{
    res.send('注册成功')
})


module.exports = Router;
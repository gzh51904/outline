const express = require('express');

const Router = express.Router();

Router.post('/',(req,res)=>{
    res.send('登录成功')
})


module.exports = Router;
const express = require('express');

const Router = express.Router();

const {mongo:{find}} = require('../db');
const {formatData} = require('../utils')

Router.get('/',async (req,res)=>{
    let {username,password} = req.query;console.log(username,password)

    let result = await find('user',{username,password});console.log(result)

    if(result.length>0){
        res.send(formatData())

    }else{
        res.send(formatData({code:250}))
    }
})


module.exports = Router;
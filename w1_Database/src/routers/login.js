const express = require('express');

const Router = express.Router();

const {mongo:{find}} = require('../db');

Router.get('/',async (req,res)=>{
    let {username,password} = req.query;console.log(username,password)

    let result = await find('user',{username,password});console.log(result)


    res.send(result)
})


module.exports = Router;
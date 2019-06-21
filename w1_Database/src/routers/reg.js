const express = require('express');

const Router = express.Router();

const {formatData} = require('../utils')

const {insert} = require('../db/mongo');

Router.post('/',async (req,res)=>{
    // async & await 实现：用同步的代码实现异步操作
    // async * await 是ES7的知识
    let data = await insert('user',req.body)

    res.send(formatData({data}))
})


module.exports = Router;
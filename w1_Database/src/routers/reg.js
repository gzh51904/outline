const express = require('express');

const Router = express.Router();

const {formatData} = require('../utils')

const {insert,find} = require('../db/mongo');

Router.post('/',async (req,res)=>{
    // async & await 实现：用同步的代码实现异步操作
    // async * await 是ES7的知识
    let data = await insert('user',req.body);

    res.send(formatData())
})

// 验证用户名是否存在
Router.get('/check',async (req,res)=>{
    // async & await 实现：用同步的代码实现异步操作
    // async * await 是ES7的知识
    let {username} = req.query;
    let data = await find('user',{username});
    console.log(data)
    if(data.length>0){
        return res.send(formatData({code:250}))
    }
    res.send(formatData())
})


module.exports = Router;
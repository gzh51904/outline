const express = require('express');

const Router = express.Router();

const {mongo:{find}} = require('../db');
const {formatData,token} = require('../utils')

// @文件上传
const multer  = require('multer')
const path = require('path');
// 设置上传文件路径
// let upload = multer({ dest: 'uploads/' })

// 配置上传参数
let storage = multer.diskStorage({
    // destination: function (req, file, cb) {
    //   cb(null, './uploads/');
    // },

    // 上传文件保存目录，无则自动创建
    destination:'./uploads/',

    // 格式化文件名
    filename: function (req, file, cb) {
        // 获取文件后缀名
        let ext = path.extname(file.originalname);

        cb(null, file.fieldname + '-' + Date.now() + ext);
    }
})
  
// 设置文件保存目录
let upload = multer({storage});


Router.post('/avatar',upload.single('avatar'),async (req,res)=>{
    // 后端如何接收文件格式的数据
    // post -> req.body
    // 文件 -> multer中间件格式化到req.file
    console.log('avatar:',req.file)

    res.send(formatData({data:req.file}))

})


module.exports = Router;
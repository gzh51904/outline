const express = require('express');

const Router = express.Router();

const goodsRouter = require('./goods');
const regRouter = require('./reg');
const loginRouter = require('./login');


Router.use(express.urlencoded({extended:false}),express.json());

// 数据接口
Router.use('/goods',goodsRouter);
Router.use('/reg',regRouter);
Router.use('/login',loginRouter);




module.exports = Router;
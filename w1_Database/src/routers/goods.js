const express = require('express');

const Router = express.Router();
const {formatData} = require('../utils');
const query = require('../db');

// var mysql = require('mysql');

// //创建连接对象，并配置参数
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'jiaoxue'
// });


var mysql = require('mysql');

  //创建连接池
  var pool  = mysql.createPool({
      host     : 'localhost',
      user     : 'root',
      password : '',
      port: 3306,
      database: 'jiaoxue',
      multipleStatements: true
  });



Router.route('/')
// 获取所有商品
.get((req,res)=>{
    // 读取数据库，并返回数据
    // 连接数据库
    // connection.connect();
    // // 查询数据库
    // connection.query('select * from goods', function (error, data, fields) {
    //     if (error) throw error;
    //    // 关闭连接,释放资源
    //     connection.end();
    //     console.log(data)
    //     res.send(formatData({data}))
    // });

    // pool.query('select * from goods', function(error, data){
    //     res.send(formatData({data}))
    // });

    // res.send(JSON.stringify(req));

    query('select * from goods').then(function(data){
        // data: promise对象改成resolve状态时传回的参数
        res.send(formatData({data}))
    },(err)=>{
        res.send(formatData({data:err,code:250}))
    })

})



// 删除单个商品
.post((req,res)=>{
    console.log('params:',req.params);

    let id = Date.now();

    res.send({
        code:1000,
        data:[],
        msg:`添加商品${id}成功`
    })
});



Router.route('/:id')

// 修改单个商品
.put((req,res)=>{
    // 请求体中的参数会被express格式化到req.body
    console.log('params:',req.params);
    console.log('body:',req.body);

    let {id} = req.params;
    

    res.send({
        code:1000,
        data:[],
        msg:`修改商品${id}成功`
    })
})



// 获取单个商品
.get((req,res)=>{
    // 动态路由: 参数id会被express格式化到req.params
    let {id} = req.params;
    console.log('params:',req.params)


    // // 连接数据库
    // connection.connect();
    // // 查询数据库
    // connection.query(`select * from goods where id=${id}`, function (error, results, fields) {
    //     if (error) throw error;
    //    // 关闭连接,释放资源
    //     connection.end();
    //     console.log(results)
    //     res.send(formatData({data:results[0]}))
    // });


    // pool.query(`select * from goods where id=${id}`, function(error, data){
    //     res.send(formatData({data:data[0]}))
    // });


    query(`select * from goods where id=${id}`).then(function(data){
        // data: promise对象改成resolve状态时传回的参数
        res.send(formatData({data}))
    },(err)=>{
        res.send(formatData({data:err,code:250}))
    })

})

// 删除单个商品
.delete((req,res)=>{
    // 动态路由: 参数id会被express格式化到req.params
    let {id} = req.params;
    console.log('params:',req.params)

    res.send({
        code:1000,
        data:[],
        msg:`删除id=${id}商品成功`
    })
});


module.exports = Router;
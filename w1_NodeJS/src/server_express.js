/**
 * 利用express制作静态资源服务
    * 
 */

//  引入express模块
 const express = require('express');//缓存

 const proxy = require('http-proxy-middleware');

//  引入路由
const allRouter = require('./api');


//  利用express模块创建一个服务器
 const app = express();

//  静态资源服务器
// 匹配静态资源,则返回
// 如果不匹配,则next()进入下一个中间
app.use(express.static('./'));

// 代理服务器
// /ali/xxx
app.use('/ali/*', proxy({ 
    target: 'https://h5api.m.taobao.com', //=>https://h5api.m.taobao.com/ali/xxx
    changeOrigin: true,
    pathRewrite: {
        '^/ali': '/', // =>https://h5.api.m.taobao.com/xxx
    },
}))

app.use(allRouter);

// 自定义中间件
// app.get('/user',(req,res,next)=>{
//     // req: express的request
//     // res: express的response
//     // next(): 调用方法进入下一个中间

//     // res.end({
//     //     username:'laoxie',
//     //     age:18
//     // })
//     res.send({
//         username:'laoxie',
//         age:18
//     });

//     next();
// });

// app.post('/user',(req,res)=>{
//     res.send({
//         type:'post',
//         msg:'注册成功'
//     })
// })


// // 默认不会进入下一个中间件
// // 除非调用next()
// app.get('/getdata',(req,res)=>{
//     console.log(666)
//     res.send([{
//         id:123,
//         name:'xxx',
//         price:998
//     },{
//         id:124,
//         name:'sss',
//         price:9.8
//     }])
// })

//  监听端口
app.listen(1904,()=>{
    console.log('server is running on http://localhost:1904')
})
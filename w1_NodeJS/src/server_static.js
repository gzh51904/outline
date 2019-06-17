/**
 * 静态资源服务器
    * 所需模块
        * http
        * fs
        * url
            * 获取浏览器路径
        * path
            * 获取文件路径
            * 获取扩展名
    * mime类型
        * text/plain
        * text/html
* 什么是前端与后端
    * request
    * response

* NodeJS的全局变量
    * __dirname
    * __filename
 */

//  实现服务器
 const http = require('http');

 // 引入url模块，用于url地址格式化
const url = require('url');

const path = require('path');

// 文件处理
const fs = require('fs');

// 引入mime类型
const mime = require('./js/mime')


 http.createServer((req,res)=>{
    // request：可获取前端传来的信息
    // response: 可以给前端返回信息

    console.log(req.url);

    // 格式化url，并格式化url中的search参数
    // 解构文件路径
    let {pathname} = url.parse(req.url,true);//img/xxx.jpg
    
    // 利用fs模块读取pathname对应的内容
    // 根据后缀名确认文件类型,并响应不同的mime类型
    // 得到扩展名
    let extname = path.extname(pathname).substring(1);//.jpg->jpg


    // 获取真实路径
    let realpath = path.join(__dirname,pathname);console.log('realPath:',realpath)

    // 异步版本的读取文件方法
    fs.readFile(realpath,(err,data)=>{
        // err:读取错误时的信息,默认:null
        // data:文件类型
        if(err){
            // 如果读取文件错误，则抛出404
            res.writeHead(404,{'content-type':'text/html;charset=utf8'});
            res.end(`您访问的地址${pathname}不存在`)
            return;
        }

        console.log('data:',data)

        // 正确读取文件
        res.writeHead(200,{'Content-Type':mime[extname] + ';charset=utf8'});
        res.end(data);

    });


 }).listen(1904,()=>{
     console.log('服务器连接成功...')
 })
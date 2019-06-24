/**
 * WebSocket服务端
 * 推送与转发
 */

const express = require('express');
const http = require('http');
const ws = require('ws');

// 1.express服务器
let app = express();
// 启动静态资源服务器
app.use(express.static('./'));


// 3.利用http模块把express服务器与websocket服务器合二为一
let server = http.Server(app);

// 2.开启一个websocket服务器，端口号为1001
let SocketServer = ws.Server;
let wss = new SocketServer({
    server,
    // port: 1001
});


// 注意：监听端口一定要合二为一的server服务器
server.listen(1904,()=>{
    console.log('http&ws服务器启动成功');
});



wss.on('connection', function connection(client) {
    // client：连接服务器的客户端,每当一个客户端连接服务端时触发该事件
    // 并把每一个客户端以数组的形式存放到wss.clients
    client.on('message',(msg)=>{

        // 广播：把这条消息发送给每一个客户端
        wss.broadcast(msg);
    })


    // 当客户端退出时执行close事件处理函数
    client.on('close',(e)=>{
        // socket.clients.forEach(client=>{
        //     client.send({status:0,data:'logout'})
        // })
        // let data = JSON.stringify({status:0,data:{username:'xxx'}})
        // socket.broadcast(data)
    })
});


//定义广播方法
socket.broadcast = msg=>{  
    socket.clients.forEach(client=>{
        // 服务器主动发消息给客户端
        client.send(msg)
    });  
}; 
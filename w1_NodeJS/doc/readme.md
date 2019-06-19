# NodeJS

## day1-1

### 复习
* 环境安装

* 系统平台
    * Windows
        * Windows mobile
        * Powersell
        * CMD
    * Unix（闭源）
        * linux（open source开源）
            * android
            * 鸿蒙
        * iOS（闭源）
* 使用
    * 静态资源服务器（web服务器->http）
        * http
        * fs
        * url
        * path
    * 模块化开发（维护成本与分工合作）
        * 规范
            * commonJS规范：NodeJS
                * exports
                * module.exports
                * require()
            * AMD规范：require.js
            * CMD规范：sea.js
            * **ES Module**

        * 分类
            * 内置模块
            * 自定义模块
            * 第三方模块(安装)
                * Express
            * 文件模块
                * json文件

* 乱码的根源
    * 输入与输出编码不一致所造成
    * 当遇到乱码问题时,解决的方案就是:改编码为utf8


### 知识点
* 前后端知识
    * 请求request与响应response
    * http/https 
        * ssl
        * http默认端口80,https默认端口443
    * 渲染类型
        * 前后端分离: BSR(客户端渲染)
        * 前后端耦合: SSR(服务端渲染)
            * 首页优化
            * SEO
* 翻墙的原理

* npm
    * --save/-S
    * --save-dev/-D
    * -g
    ```bash
        # 安装dependencies & devDependencies下所有依赖
        npm install 

        # 仅安装dependencies
        npm install --production
    ```

* express中间件(middleware)
    > 什么是中间件: 中间就是一个函数
    * 分类
        * 内置中间件
            * express.static()
        * 自定义中间件
        * 第三方中间件
    * 使用
    ```js
        // 不管什么请求类型都可以进入中间件
        app.use([path],...middleware)
    ```

* 请求类型(RESTful api)
    > 根据请求类型与路径编写数据接口,达到相应不同数据的结果
    * get
    * post
    * put
    * delete

## day1-2

### 面试题
* 跨域解决方案中的jsonp,CORS,服务器代理prox异同
    * 为什么会有跨域限制:js是客户端语言
    * 获取别人的数据
    * jsonp
        * 前端
            * script标签
            * 全局函数名
        * 返回一段js代码(全局函数的执行代码)
        * 缺点
            * 不是ajax
            * 只能发送get请求
    * CORS(Cross Origin Resourse Sharing)
        * 后端直接设置响应头
            * Access-Control-Allow-Origin:*
            * Access-Control-Allow-Headers
            * Access-Control-Allow-Methods:post,get,put,delete
    * 服务器代理
        * 有接口:利用后端没有跨域限制的特点来代理前端的请求
        * 无接口:爬虫

### 复习
* 静态资源服务器
    * 原生Node
        * http
        * url
        * fs
        * path
    * express
        * express.static()
* Express
    > express就是原生nodejs的封装
    * 中间件(middleware,一个函数)
        * 内置
        * 自定义
    * 使用
        * app.use([path],...middleware)
        ```js
            const express = require('express');
            const app = exress();

            app.use('/home',(req,res)=>{
                res.send()
            })

            app.get('/goods',(req,res)=>{

            })

            app.post('/goods',(req,res)=>{

            })
            app.delete('/goods',(req,res)=>{

            })
        ```

* RESTful API
    * 根据请求类型或路径的不同作为不同接口返回数据


### 知识点
* 数据接口: BSR
* 路由    : SSR

* 动态路由: url传参中使用变量来表示某个数据
* express后端接收数据
    * search参数(get请求): req.query
    * 动态路由:   req.params
    * 请求体参数(post): req.body


```js
    //前端ajax请求

    let xhr = new XMLHttpRequest();
    xhr.open('post','xx.php',true);
    xhr.setRequestHeader('Content-Type','x-www-form-url-encoded');
    // xhr.send('username=jingjing&password=123');// $_POST['username'], $_REQUEST['']
    xhr.send('{"username":"jingjing","password":123}');

```

* CommonJS模块化开发
    * 利用模块化开发实现服务器与路由的结合


### 面试题
* 原型链的理解
    * Object.prototype
    * js是一门基于对象的语言
    * js一切皆对象

    ```js
        let obj = {username:'jingjing',age:36}

        obj.age;//36

        let num = 100;
        num.toFixed()

        //num = new Object(num);
        //num.toFxied()
        //delete num
    ```
* 计算数组元素出现的次数
```js
    let arr = [10,12,11,10,5,6,6,3,5,10] //=>{10:30,12:1,11:1,5:2,6:2,3:1}

    let obj = {};//{10:1}
    // 利用对象来实现

    if(obj[item]===undefined){
        obj[item] = 1
    }else{
        obj[item]++
    }

    // 去重
    let newArr = new Set(arr);
    newArr = Array.from(newArry);//newArr = [...newArr]
```

### 知识点
* CORS
* 服务器代理
    * 有接口:后端代理
    * 无接口:爬虫

## day1-3

### 面试题
* 如何让图片居中(不知道图片的宽度)
    ```js
        img{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}

        // 不支持css3的浏览器如何实现
        // js计算
        // 如何获取图片宽高:img.width/img.height(前提:图片加载完成并显示)
        // img.onload = ()=>{img.width/img.height}
    ```
* 事件传播
    * 事件冒泡
    * 事件捕获
    * 事件源对象： e.target/e.srcElement
    * 事件绑定对象: this/e.currentTarget

### 复习
* Express模块化路由
    * commonJS模块化
    * 中间件express.Router
* 跨域解决方案
    * jsonp
    * CORS
    * 代理服务器
        * 有接口无授权：代理http-proxy-middleware
        * SSR:爬
            * 难点：数据分析
            * cheerio：针对服务器包含jquery核心的库

### 知识点
* 爬虫
    * 难点：数据分析
    * cheerio：针对服务器包含jquery核心的库
* fs
    * file
    * stream
        * pipe
    ```js

        gulp.src('./src/js/*.js') //得到一个文件流stream

        .pipe(gulyfy())
        .pipe(concat())
    ```

### 面试题
* 语义化标签：合适的位置使用正确的标签
    * div,ul/ol,h1-6,p -> header,footer,main,article,nav,aside,section....
    * span,strong,em,img,...
    * SEO
        * 语义化标签
        * 合理的布局
        * 关键字排布
        * 保持原创
        * 热搜

### 知识点

* 数据库
    * SQL(关系型数据)
        * Oracle
        * MySQL -> MariaDB
        * SQLServer
    * 数据库操作
        * 查：`select <字段1, 字段2, ...> from <表名> where <条件>`

* Promise
    * async
    * await
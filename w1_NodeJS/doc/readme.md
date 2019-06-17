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
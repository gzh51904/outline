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

* 乱码的根源
    * 输入与输出编码不一致所造成
    * 当遇到乱码问题时,解决的方案就是:改编码为utf8
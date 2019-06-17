# NodeJS

## 复习

### http服务器

> 静态资源服务器

* 使用模块
    * http
    * fs
    * url
    * path
* 了解文件mime类型

* 部署到服务器

### 模块分类

>模块系统是 Nodejs 最基本也是最常用的。一般情况模块可分为四类：

* 自定义模块
* 原生模块（Nodejs内置模块）
* 文件模块（json文件等）
* 第三方模块

```javascript
//hello.js

function hello(){
    return 'hello laoxie';
}

//对外暴露接口（commonJS规范）
module.exports = hello;
```

#### 导出模块

>如果没有这句话，引入模块时 就会得到 空对象

* module.exports
>对外暴露单个接口，一个模块中只能有一个 module.exports，多个会被覆盖。

* exports
>在一个模块中暴露多个exports接口

```javascript
    //person.js
    function setName(){
        return 'laoxie'
    }

    function setAge(){
        return 18
    }

    // 对外暴露接口
    exports.setName = setName;
    exports.setAge = setAge;

```

#### 引入模块require()

>引入模块，使用nodejs内置的require()方法（同步的commonJS规范）

```javascript
    //page.js
    
    //得到一个对象，包含暴露的setName,setAge方法
    let person = require('./person.js');

    // 既然是得到对象，也可以直接解构
    let {setName,setAge} = require('./person.js');

```

* require 方法中的文件查找策略

![require](./img/模块加载过程.jpg "查找策略")

## 知识点
* 服务器知识
    * 前端与后端
    * BSR与SSR
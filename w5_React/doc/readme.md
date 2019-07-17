# React

## day5-2

### 面试题
* http与webSocket
    * https & wss
    * 轮询
* Vue插槽slot
    * v-slot
* token ： 加密后的字符串
    * 用户权限管理

### 知识点
* 开源open source
* github page
* React使用
    * 特点
    * JSX
        * SX -> NX

### 面试题
* 最先在哪个生命周期可以操作节点
    * beforeMounte
* 最先在哪个生命周获取到父组件传入的数据
    * created
* vuex核心配置
    * state
    * getters
    * mutations
    * actions
    * modules

### 知识点
* VirtualDOM
* 视图层的框架
    * MVC完整架构
        * M: Model
        * V: View
        * C: controller
    * PS: Vue是一个完整的MVC架构框架，React是一个视图层框架（MVC中的View）
* 组件
    * 定义
        * 函数组件
            * 利用函数来定义一个组件
        * 类组件
            * 利用类来定义一个组件
        
        ```js
            // 函数组件
            function Comment(){
                return (
                    <div>
                        
                    </div>
                )
            }

            // 类组件
            // 必须有render方法
            class Comment extends React.Component{
                render(){
                    return <div>
                         
                    </div>
                }
            }
        ```
    * 使用
    ```jsx
        <Comment/>
    ```
### 练习
* 利用React实现todolist


## day5-3

### 面试题
* 响应式属性
    * getter & setter
* 属性特性
    * 值属性
        * configurable
        * enumerable
        * writable
        * value
    * 存储器属性
        * configurable
        * enumerable
        * get
        * set
    * 设置属性特性
        * Object.defineProperty(target,key,description
        * Object.defineProperties(target,descriptions)
    * 获取属性特性
        * Object.getOwnPropertyDescriptor()
        * Object.getOwnPropertyDescriptors()

### 复习
* React特点
    * 声明式
    * 高性能VirtualDOM
        * 节点操作优化
        * 事件优化
        * ...
    * JSX
        * html标签、组件、js混用
        * 限制条件
            * class -> className
            * for   -> htmlFor
            * 驼峰写法
                * autofocus -> autoFocus
                * onclick   -> onClick
                * ....
            * 闭合标签
    * 组件化开发
    * 单向响应数据流
        * 谁的数据谁修改

* 使用
    * 浏览器端直接使用
        * react.js
        * react-dom.js
        * babel.js(browser.js)
            * type="text/babel"
    * webpack
* 组件化开发
    * 限制条件
        * 必须大写字母开头
        * 只允许一个根元素
    * 分类
        * 函数组件（推荐）
            * 无状态组件
            * 受控组件
            * UI组件
            ```js
                function Button(){
                    return <button></button>
                }
            ```
        * 类组件
            * 状态组件
            * 非受控组件
            * 容器组件
            ```js
                class Button extends React.Component{
                    render(){
                        return <button></button>
                    }
                }
            ```
    * 使用
    ```js
        <Button/>

    ```
    * 组件通讯
        * 父->子：props
            * children

* 函数式编程 与 面向对象编程

### 知识点
* gulp
    * gulp是基于任务的构建工具
* webpack：基于配置的构建工具（webpack.config.js）
    * 入口：entry
    * 出口：ouput
    * 测试服务器：devServer
        * 解析/编译不同的文件
    * 加载器：loader
        > 用来编译/解析不同的文件类型
        * module.rules: <Array>
            * test: <RegExp>
            * use:<Array>
                `[{loader:<String>,options:{presets:[]}}]`
    * 插件：plugins<Array>
    
```js
    // gulpfile.js
    let gulp = require('gulp');
    let sass = require('gulp-sass');


    gulp.task('buildSass',()=>{
        // 匹配文件
        gulp.src('./src/sass/*.scss')

        // 编译sass
        .pipe(sass())

        // 输出到硬盘
        .pipe(gulp.dest('./dist/css'))
    })



    // 命令行
    gulp buildSass

```

### 面试题
* 原型链、this、作用域
* 函数防抖、节流
    * 目的：优化性能
    * 防抖：只执行最后一次
        * 百度搜索建议
    * 节流：执行第一次
        * 滚动加载
* 重绘与重排

### 知识点
* 状态
    * 修改：this.setState()
* 事件处理
    * 事件处理函数默认没有this
    * 事件处理函数最后一个参数为event对象
* bind方法
    * 改变this指向，不执行函数，返回一个函数
    * 只能改变一次this指向
* ref
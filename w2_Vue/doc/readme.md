# Vue

## day2-2

### 面试题
* 如何获取带.box的父级元素
```js
    // jQuery
    $btn.parents('.box');
    jQuery.prototype.parents = (selector)=>{
        // 在这如何获取$btn
        let current = this[0];
        let parent = current.parentElement;
        let res = []
        while(parent){
            if(parent.className === 'box'){
                res.push(parent)
            }

            // 更新parent
            parent = parent.parentElement;
        }
    }

    // 原生js
    function parents(ele){
        let current = ele;
        let parent = current.parentElement;
        let res = []
        while(parent){
            if(parent.className === 'box'){
                res.push(parent)
            }

            // 更新parent
            parent = parent.parentElement;
        }
    }
```
* css动画与js动画的区别
* 如果我在一个页面上渲染5000+数据的表格
    * 卡顿
    * 解决方案
        * 分页
        * 删除不现实的节点

### 复习
* WebSocket
    * 长连接
* HTML5新特性
    * 语义标签
    * 增强型表单

    * Video和Audio
    * Canvas
    * SVG `<svg><path/></svg>`

    * WebStorage
    * WebSocket
    * FormDate
    * Geolocation
    * FileReader
    * draggable拖放API
    * WebWorker
    * ....
* 矢量图与位图
    * 矢量图：
        * 优点：放大不失真
        * 缺点：色彩单一（扁平化设计）
        * 格式：.svg....
    * 位图：
        * 缺点：放大失真
        * 优点：色彩丰富（利用像素点来表示一个颜色）
        * 格式：jpg,png,gif....

### 知识点
* 前端框架历史
    1. jquery
        * 不适合大型项目
    2. angularjs
        * 引入了MVC、双向数据绑定、依赖注入
        * 第二个版本后改名:angular(ng)
    3. React
        * virtual DOM，性能上碾轧angularJS
    4. Vue
        * 综合ng与React的特点，并优化了一写功能

* 做项目需考虑的方面
    * 开发灵活性
    * 维护简便性
    * 可扩展性

* 架构模式(分层)
    * MVC
        * M : Model
        * V : View
        * C : Controller
    * MVP
        * P: Presenter
    * MVVM
        * VM: ViewModel

* 数据驱动的原理
    * 存储器属性（ES5）
        * getter
        * setter
            * 在setter中更新视图
    * 值属性
    * 关注点放在数据而不是节点
        * 声明式渲染：别人声明好的东西直接拿来用，只关注结果而不用关注过程

### 面试题
* call & apply & bind的异同
    * 共同点
        * 都是函数的方法（Function.prototype）
        * 都能改变this指向
    * 不同点
        * call&apply会调用函数
        * bind不会调用函数，但返回一个新的函数

    ```js
        // this指向
        function show(){ console.log(this)};

        show();//window
        let obj = {show};
        obj.show();//obj
        let s = new show();// s

        // 箭头函数
        let show2 = ()=>{ console.log(this,arguments) }

        //
        let person = {}
        show.bind(person);//仅仅改变this指向，不会执行show方法
        show.call(person);//改变this指向，并执行show方法
        show.apply(person);//同上

    ```
* git的常用命令
    * git init
    * git status

    * git add 
    * git commit 
    * git push
    * git pull / git fetch
    * git clone

    * git branch
    * git checkout
    * git merge

    * git reset
    * git log

* 项目构建（grunt->gulp->webpack）
    * 编译
    * 合并
    * 压缩
    * 输出

### 知识点
* vue的实例化过程
    1. 实例化并配置参数new Vue({...options})
    2. 配置参数
        * el    挂载点
        * data  实例化过程中会遍历data所有的属性，把它们变成getter&setter，并写入Vue实例
* todolist
    * 增删改查
    * bootstrap

## day2-3

### 面试题
* 怎么理解响应式属性
    * 响应式系统
    * 后期添加响应式属性
        * Vue.set(target)
        * this.$set(target)
* 后端返回格式不符合预期如何处理
    * 处理数据
* get&post的区别
    * 语义
        * get：查（获取）
        * post:增（添加）
    * 参数传送方法
        * get:url
        * post: request body
    * 传输大小
        * url长度限制了get请求的参数大小
    * 编码
        * get: URL编码
    * ....


### 复习
* 响应式属性
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
* 架构模式
    * MVC
    * MVP
    * MVVM
* 数据绑定
    * {{实例属性}}

* 指令
    * v-show
    * v-if
        * v-else
        * v-else-if
    * v-on
* 配置参数
    * el
    * data
    * template
    * methods


### 知识点
* 列表循环
    * v-for: `v-for="item in tabs"`
* 数据绑定
    * 内容：{{}}
    * v-bind: `v-bind:id="current"`
        * 任何属性都可以使用`v-bind:属性`
        * 专门对class和style属性进行增强,可以支持数组和对象

### 面试题
* express中如何处理请求数据
    * get: req.query
    * post: express.urlencoded() -> req.body
    * 动态路由：req.params
* 如何延迟js代码执行
    * window.onload
    * jQuery(function(){})
    * document.onreadystatechange = function(){
        if(document.readyState === 'interactive'){
            
        }
    }
    * document.addEventListener('DOMContentLoaded',function(){})
    
    * script标签的属性
        * type
        * src
        * async（布尔值属性）：异步下载，下载完成立即执行（下载不阻塞，执行阻塞）
        * defer（布尔值属性）：推迟js执行时间（下载和执行都不会阻塞页面代码）


### 知识点
* computed
    * getter（默认）
    * setter
* ref
    * 给目标元素添加Ref属性
    * 通过实例.$refs属性获取
    ```js
        <button ref="btn"/>

        this.$refs.btn;//获取到真实dom节点
    ```
* 事件修饰符
    * v-on:keyup.13
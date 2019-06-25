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
## day3-1

### 面试题
* 子组件最先能在哪个生命周期函数中获取到props
    * created


### 复习
* 组件通讯
    * 父 -> 子 ： props
        * 定义
            * 只定义不接受，会自动成组件根节点属性
        * 接收
            * 校验
                * 必填：required
                * 默认值：default
                * 自定校验：validator
    * 子 -> 父
        > 谁的数据谁修改的原则（状态提升）
        * 把处理函数传入子组件，并在子组件执行
        * 自定事件+$emit
            ``` <Component v-on:xxx="handle"/>
        * sync修饰符
            1. 父组件：v-bind:xxx.sync
            2. 子组件：$emit('update:xxx')
    * 兄弟
        * 兄弟 -> 父
        * 父 -> 兄弟
    * 复杂组件通讯
        * Bus：vue实例可以绑定和触发事件
            * vm.$on('xxx',handle)  
            * vm.$emit('xxx',xx)

            ```js
                const Bus = new Vue();

                // 把数据从 A -> B
                // 发送方：A
                Bus.$emit('getdata',100)

                // 接收方：B
                Bus.$on('getdata',(num)=>{})
            ```

### 知识点

* 内容传输
    > <slot></slot>
    * 命名插槽（外->内）
        * name="xxx"
        * v-slot:xxx
            > v-slot只能应用在template或组件中
    * 作用域插槽（内 -> 外）
        * 
* 内置组件
    * component
        * is: 
            * string（组件名）
            * ComponentDefinition（组件配置参数）
            * ComponentConstructor（组件）

### 面试题
* 如何给定义的组件绑定事件
```js
    <my-button v-on:click.native="handler">编辑</my-button>

    myButton = {
        //props:['click']
        template:`<button><slot/><button>`
    }
```
* 组件数据data为什么必须是函数
    * js中对象为引用数据类型
    * 复用
* 数据校验
    * 必须要求是数字
    ```js
        <my-button v-bind:price="100"></my-button>
        <my-button v-bind:style="{color:'#f00',fontSize:'12px'}">{{}}</my-button>
    ```

### 知识点
* 内置组件
    * keep-alive ： 缓存非活动组件

    * 动画
        * transition
        * transition-group

        * 什么是进入/离开状态
            * v-if
            * v-show
            * component


## day3-2

### 面试题
* ES7 async & await
```js
    let pro = new Promise((resovle,reject)=>{
        // 异步操作（不知道什么时候完成）
        // ...
        $.ajax({
            url:'xxx',
            success(data){
                resovle(data);
            },
            fail(err){
                reject(err)
            }
        })
        
    });


    pro.then(data=>{

    }).catch(err=>{

    })

    // async&awai
    let data = await pro;

    async function getData(){

    }

    getData();//undefined -> promise
```
* 什么时候不能使用箭头函数
    * Vue的生命周期函数
    ```js
        this.xxx
        this.xxx = 'xx'
    ```


### 复习
* 内置组件
    * 插槽`<slot/>`
    * 动态组件：`<component is=""/>`
    * 缓存：`<keep-alive/>`
        * include
        * exclude
        * 生命周期函数
            * activated
            * deactivated
    * 动画
        * `<transition/>`
        * `<transition-group/>`
            * name
        * 触发条件
            * v-if
            * v-show
            * `<component/>`
            * 组件根节点
        * animate.css

### 知识点
* 多页面应用 MPA（Multiple Page Application）
    * 靠a标签进行跳转的应用
* 单页面应用 SPA（Single Page Application）
    * 路由
        * hash路由：url的hash
        * history路由：html5的state
            * pushState()
            * replaceState()
* 换行
    * linux
        * \n
    * windows
        * \n\r
* VueRouter使用步骤


### 面试题

* 如何在子组件获取父组件的数据
    * 父->子
        * props
        * this.$parent.$options
* 如何子父组件中获取子组件的数据
    * this.$children[0]
    * this.$refs.xxx

    ```js
       
        Vue.component('myForm',{
            template:`<div>
                <h4 ref="title">获取子组件数据</h4>
                <Button ref="btn"></Button>
            </div>`,
            mounted(){
                //this.$refs.title

                this.$children[0];
                this.$refs.btn;

                this.$root;//获取根组件（_uid为0的组件）
            }
        })

         let vm = new Vue({});
    ```
* Vue中data,computed,methods的异同
    * 共用命名空间
    * data和computed都为属性，methods为方法
        * computed具有缓存能力
        ```js
            new Vue({
                data:{
                    goodslist:[]
                },
                computed:{
                    saleGoods(){
                        return this.goodslist.map(item=>{
                            item.price = item.price*0.8;
                            return item;
                        })
                    }
                },
                methods:{
                    sale(){
                        return this.goodslist.map(item=>{
                            item.price = item.price*0.8;
                            return item;
                        })
                    }
                }
            })
            {{goodslist}} {{saleGoods}} {{sale()}}
        ```


### 知识点
* hash路由的原理
    * hash的修改触发组件的渲染
    ```js
        window.onhashchange = function(){
            // 根据不同hash值渲染不同的组件
        }
    ```

* elementUI
    * 引入方法
        * 完整引入
        * 按需引入

## day3-3

### 面试题
* 如何下线在同类型设备中登录的账号
    * socket
        * websocket
        * socket.io
### 复习
* Vue-router
    * 模式
        * hash（开发，默认）
        * history（上线）
    * 步骤
        1、引入Vue,VueRouter
        ```js
            VueRouter = {install:function(Vue){
                Vue.component('xxxx');
                //....
            }}
        ```
        2、安装： Vue.use()
        3、实例化（配置参数）
        4、注入
        5、使用this.$router
    * 显示 `<router-view/>`
    * 导航
        * 声明式导航 `<router-link/>`
            * to
        * 编程式导航
* UI
    * elementUI
    * mintUI
* 按需加载
    * babel-plugin-import


### 知识点
* sass与less的支持
    * lang
* css局部样式和模块化
    * scoped
    * module
    
* 编程式导航
    * $router 路由实例
        * push()
        * replace('/login') // 等效于 <router-link to="/login" replace>
    * $route 当前路由信息
        * params
        * query
* 动态路由
    * 复用原则
* 路由传参
    * 定义时传参
        * props
    * 跳转时传参
        * params
        * query

### 面试题
* SSR & BSR
    * 是什么
    * 优缺点
* 如何理解前端开发
    * 做页面

### 知识点
* 动态路由
    * watch
    * beforeRouteUpdate
* Vue引入版本控制
    * vue.config.js
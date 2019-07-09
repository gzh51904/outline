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

## day3-4

### 面试题
* MongoDB & MySQL
* VirtualDOM
    * diff算法

### 复习
* 编程式导航
    * this.$router
        * push({name:'Home'})        有浏览记录
        * replace()     无浏览记录
    * this.$route
        * 当前路由信息
* 路由传参
    * 定义
        * 动态路由
            * watch
        ```js
            new Vue({
                //...
                watch:{
                    //监听实例属性
                    num:function(to,from){
                        // 当实例属性num有修改时触发这个函数
                    },
                    $route:function(to,from){
                        // 监听到动态路由的改变
                    }
                },

                beforeRouteUpdate(to,from,next){
                    // 权限管理：当前页面必须从某个页面跳转过来才能跳转
                    if(from.path == '/home'){
                        next();
                    }
                }
            })
        ```
        * props
            * Object
            * Function
            * Boolean
    * 跳转
        * query
        * params （必须name跳转方式）
* 嵌套路由
    * <router-view>
    ```js
        <router-view/>

    ```
* 命名视图
    `<router-view name="header"/>`
    * 多个路由视图必须给router-view命名，路由定义是必须使用components


### 面试题
* OOCSS
    * postcss
* key作用

### 知识点
* 给Vue的原型添加属性
* 路由拦截(权限控制，重点)
    * 未登录状态不允许访问“我的”，“购物车”
* 路由守卫
    * 全局守卫
        * 所有的路由切换都会执行，在配置文件中设置
    * 路由独享的守卫
        * 每个路由的守卫，写在路由配置中
    * 组件内的守卫
        * 类似与组件生命周期函数，写在组件配置中


## day3-5

### 面试题
* 依赖请求：promise.all()
```js
    // 第5个请求，依赖前4个请求的数据
    let p1 = new Promise((resolve)=>{

        let xhr1 = new XMLHttpRequest();
        xhr1.onload = ()=>{
            resolve(xhr1.responseText)
        }
    })

    let p2 = new Promise((resolve)=>{

        let xhr2 = new XMLHttpRequest();
        xhr2.onload = ()=>{
            resolve(xhr2.responseText)
        }
    })
    
    let p3 = new Promise((resolve)=>{

        let xhr3 = new XMLHttpRequest();
        xhr3.onload = ()=>{
            resolve(xhr3.responseText)
        }
    })

    let p4 = new Promise((resolve)=>{

        let xhr4 = new XMLHttpRequest();
        xhr4.onload = ()=>{
            resolve(xhr4.responseText)
        }
    })

    // await p1
    // await p2
    // await p3
    // await p4

    // 把p1,p2,p3,p4包装成一个promise对象
    // 只有这4个promise对象的状态都为Resolved时，它才是Resolved
    Promise.all([p1,p2,p3,p4]).then(res=>{
        // res就是前4个promise对象的返回值数组
        let xhr5 = new XMLHttpRequest();
    });

    // 竞速：把p1,p2,p3,p4包装成一个promise对象
    // 只要有一个promise对象的状态改成Resolved，它的状态就是Resolve
    Promise.race([p1,p2,p3,p4]).then(res=>{
        // res就是请求最快的返回结果
       
    });

    //...

    Promise.resolve(obj);//把obj包装成一个promise对象，并把状态改成Resolved
    Promise.reject(obj);//把obj包装成一个promise对象，并把状态改成Rejected

```

### 知识点
* 路由守卫
    * 路由跳转过程
    * 全局
        * beforeEach(fn)
            * to
            * from
            * next
        * afterEach(fn)
            * to
            * from
    * 组件独享的
        * beforeEnter
    * 组件内路由守卫
        * beforeRouteEnter()
        * beforeRouteUpdate(fn)
        * beforeRouteLeave(fn)
* 权限管理
    * beforeEach(fn)

### 知识点
* token 令牌（加密后的字符串）
    * 原理
        * 加密（生成）
        * 解密（校验）
    * 使用过程
        1. 登录
        2. 后端校验用户名和密码
            * 通过：则生成一个token，并返回客户端
        3. 客户端接收到token，并保存在客户端
        4. 客户端每一次请求都要携带token，发送给后端进行校验
            * 通过：保持当前状态
            * 不通过：退回登录页面
                * token被伪造
                * 过期
* 请求拦截
    > 在请求发出去之前进行拦截操作
    * 添加请求头
* 响应拦截
    > 请求回来后，then之前进行拦截操作


* 二进制
```js
    00000000 -> 256(2**8)

    a -> 97 -> 01100001

    00000000 01100001 01100001

```


### 面试题
* 在Vue项目中页面返回如何保持滚动条位置
```js
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
    }
```
* 深拷贝对象
    * 递归遍历
    * JSON.parse(JSON.stringify(obj))
* 浅拷贝
    * Object.assign()
    * ...

### 知识点
* Vuex
    * store
        * state 状态（数据1->数据2）            data
        * getters                              computed
        * mutations                            methods
            > mutations中的方法是唯一修改state的方式
        * actions                               
            > 用于异步操作，在这里一般用于操作mutaions方法
    * 使用步骤
        1. 引入
        2. 创建store
        3. 把store注入根实例
        4. 使用this.$store.state.xxx
* 热更新Hot Update

* Vuex映射
    * mapState          映射到computed
    * mapGetters        映射到computed
    * mapMutations      映射到methods
    * mapActions        映射到methods

### 面试题
* Vue数据挂载的原理
```js
    <div>
        你好，{{username}}，欢迎来到username

        <p>性别：{{age}}</p>
    </div>

    let person = {username:'laoxie',age:18,gender:'男'}

    // 利用正则表达式匹配内容
    let template = div.innerHTML
    
    let res = template.match(/\{\{\w+\}\}/g);//['{{username}}','{{age}}']
    res.forEach(item=>{
        let key = item.replace(/(\{\{)|(\}\})/g,'');
        template.replace(item,person[key])
    })

    // 零宽断言
    // let res = template.match(/(?<=\{\{)\w+(?=\}\})/g);//['username','age']
    res.forEach(item=>{
        template.replace('{{'+item+'}}' ,person[item])
    })
```

### 知识点
* store模块化
    * modules

    * 对state的获取有变化：this.$store.state.goodslist  -> this.$store.state.cart.goodslist
    * 对mutations,actions的操作无变化：this.$store.commit('changeQty',10) -> 项目


## day4-2

### 复习
* vuex映射
    * mapState      -> computed
    * mapGetters    -> computed
    * mapMutations  -> methods
    * mapActions    -> methods
        ```js
            // 传统
            this.$store.commit('mutation',prop);

            //映射
            this.getData(prop)
        ```
    * Actions
        * 什么时候用：有多个组件使用同一个异步求情数据时
        ```js
            // 组件A
            created(){
                //axios.get('/user').then(res=>{
                    //操作数据
                //})

                this.$store.dispath('getUserInfo',{id:123})
                // this.getUser({id:123})
            }

            // 组件B
            created(){
                //axios.get('/user').then(res=>{
                    //操作数据
                //});

                this.$store.dispath('getUserInfo')
            }
            //...

            new Vuex.Store({
                //..
                state:{
                    userInfo:{}
                },
                mutations:{
                    // store.commit('changeUser',{username:'jingjing'})
                    changeUser(state,payload){
                        state.userInfo = payload;
                    }
                },

                // 异步操作（副作用）
                actions:{
                    // action -> mutation -> state
                    // 触发actions: store.dispatch('getUserInfo',{})
                    getUserInfo(context,params){
                        // context: 类似store的对象
                        axios.get('/user',{params}).then({data}=>{
                            context.commit('changeUser',data.data)
                        })
                    }
                }
            })
        ```
    * 模块化
        * module
        ```js
            new Vuex.Store({
                modules:{
                    cart,
                    common
                }
            });

            //调用
            // this.$store.commit()
            //this.$store.state.common

            // cart
            export default {
                state:{
                    goodslist:[]
                },
                mutations:{
                    add(){

                    },
                    remove(){

                    },
                    changeQty(){

                    }
                }
            }

            // common
            export default {
                state:{
                    menushow:true,
                    userInfo:{}
                },
                mutations:{
                    displayMenu(){

                    },
                    changeUser(state,user){
                        state.userInf = user
                    }
                },
                actions:{
                    login(context){
                        axios.get().then(res=>{
                            context.commit('changeUser',res.data)
                        })
                    },
                    logout(){

                    }
                }
            }

        ```

### 知识点

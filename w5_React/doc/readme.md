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

## day5-4

### 面试题
* 如何限定传入组件的数据类型
    * props数据类型校验
    ```js
        //props:['data']
        props:{
            // data:[Array,Object],
            data:{
                type:[Array,Object],
                //required:true,
                default:[],

            }
        }
    ```
* 路由传参
    * 定义传参：props -> v-bind={username:'xx',age:18} -> v-bind:username="xx" v-bind:age=18
    * 跳转时传参
        * query
        * params
            * 只支持name方式跳转

### 复习
* webpack（webpack.config.js）
    * entry
    * output
    * devServer
    * loader（module.rules）
        * test
        * use
    * plugin
    * resolve
        * extensions
* React
    * 事件
        * this
            * bind
                * 改变this执行而不执行函数
                * this指向只能改变一次
            * 箭头函数
        * event
            * 最后一个参数
        * 传参
            * bind
    * ref
    * 状态组件
        * state
            {
                username:123
            }
        * 修改：setState({age:18,username:});//Object.assigin(target,obj1,obj2)
            * 修改不会立即执行
                ```js
                    this.state = {
                        username:'laoxie'
                    }

                    this.setState({username:'jingjing'},()=>{
                        console.log(this.state.username)
                    });

                    this.state.username;//laoxie
                ```

## 知识点
* webpack
    * loader
        * css-loader
        * style-loader
        * sass-loader
        * 简写
* React
    * context: 组件的共享区域，允许子组件直接访问
        * 避免逐层传递的麻烦
        * 使用
            * 定义：`let MyContext = React.createContext(default)`
            * 父组件共享数据：`<MyContext.Provider value={data}>`
            * 子组件获取数据
                1. contextType（只支持类组件）
                    * 子组件设置静态属性：`SubComponent.contextType = myContext`
                    ```js
                        class SubComponent extends Component{
                            // 原型方法：等效于SubComponent.prototype.getData = ()=>{}
                            getData(){

                            }

                            // ES6静态方法：等效于SubComponent.getData = ()=>{}
                            static getData(){

                            }

                            // ES6不支持静态属性: 需使用babel插件：@babel/plugin-proposal-class-properties
                            static contextType = myContext;
                            //constructor(){
                                //super()
                                //this.state = {}
                            //}

                            // 用了babel插件，可以使用以下写法实现state和事件处理函数
                            state = {

                            }

                            handleClick = ()=>{
                                
                            }

                            render(){
                                ///this.getData()
                                return <div></div>
                            }
                        }

                        // 静态属性
                        //SubComponent.contextType = myContext
                    ```
                    * 子组件获取共享数据：this.context
                2. Consumer（推荐）
                    ```jsx
                        <MyContext.Consumer>
                            {
                                value=>{

                                }
                            }
                        <MyContext.Consumer>
                    ```

### 知识点
* 生命周期函数
    * Mounting：已插入真实 DOM
        * componentWillMount
        * componentDidMount
    * Updating：正在被重新渲染
        * componentWillUpdate
        * componentDidupdate
    * Unmounting：已移出真实 DOM
        * componentWillUnmount
    * 特殊生命周期函数
        * componentWillReceiveProps
        * shouldComponentUpdate

    * 目的
        * 了解每个生命周函数的执行时机
        * 了解每个生命周函数适合哪些操作
        * 知道如何通过生命周期函数优化性能

* ReactRouter路由
    * 一切皆组件
    * 常用组件
    * 导航
        * 声明式导航
        * 编程式导航
            * 跳转方式
                * history.push()
                * history.replace()
            * 获取history
                * 通过Route渲染组件：this.props.history
                * withRouter高阶组件
                ```js
                // 模拟withRouter
                function withRouter(MyComponent){
                    return function(){
                        return <MyComponent history={xxx} location={xxxx} match={xxx}/>
                    }
                }

                class App extends Component{
                    render(){
                        console.log(this.props.history)
                        return <div></div>
                    }
                }


                App = withRouter(App)

                ```

## day5-5

### 面试题
* Vue嵌套路由
    1. 配置
    ```js
        routes:[{
            path:'/list',
            component:List,
            children:[{
                path:'phone', // /list/phone
                component:Phone
            },{
                path:'pad',
                component:Pad
            }]
        },

        //与动态路由的区别
        {
            path:'/goods/:id',
            component:Goods
        }]

    ```
    2. 嵌套router-view
    ```html
         <!-- App -->
        <router-view/>

        <!-- List -->
        <router-view>

    ```
* Vue插件
    * Vue扩展，是一个函数或对象（必须包含install方法）
    ```js
        let myPlugin = {
            install(Vue){
                // 全局方法
                Vue.directive();
                Vue.component();
                Vue.filter()
                Vue.mixin()
                //...

                Vue.prototype.$axios = axios
                Vue.xxx = ()=>{}
            }
        }

        let myPlugin = function(Vue){
            //
        }
    ```
    * 使用：Vue.use(VueRouter);

### 复习
* ReactRouter(万物皆组件)
    * 使用ReactRouter就是在调用组件
    * 常用组件
        * 路由类型
            * <HashRouter/>
            * <BrowserRouter/>
        * 配置
            * <Route/>
                * path
                * component
                * render
                * exact
            * <Switch/>
                * 把一些匹配范围较大的<Route/>放到最后
            * <Redirect>
                * from
                * to
                * exact
        * 跳转
            * 声明式导航
                * <Link/>
                * <NavLink/>
                    * activeStyle
                    * activeClassName
                    * to : <String><Object>
                    * replace
            * 编程式导航
                * history
                    * push()
                    * replace()
                * 获取history
                    * 通过<Route/>组件渲染：this.props.history
                    * 通过withRouter高阶组件：this.props.history
                        App = withRouter(App)
                        

### 知识点

* 高阶组件HOC（High Order Component）
    * 编写高阶组件注意事项：必须转发所有属性
```js
    class App extends Component{
        render(){
            console.log(this.props.history,this.props.username)
            return <div>App</div>
        }
    }
    // 最终解析：<div>App</div>

    App = myHoc(App);// 最终解析<MyHoc username="laoxie"><div></div></MyHoc>

    // 模拟withRouter
    function myHoc(InputComponent){
        // 官方高阶组件，自己肯定有hitory

        // 函数组件
        return function(props){//{username:'laoxie,age:18}
            return <InputComponent history={history} {...props}/> // 等效于username="laoxie" age="18"
        }

        // 类组件
        class OuterComponent extends Component{
            render(){
                return <InputComponent {...this.props} {...this.state}/>
            }
        }

        return OuterComponent
    }
```
* ES7装饰器Decorator：@
    * 用来简化包装函数的写法
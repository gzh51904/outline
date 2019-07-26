## day6-1

### 复习
* 路由ReactRouter
    * 万物皆组件
    * 动态路由
    * 嵌套路由
* 全家桶
    * Vue全家桶
        * Vue
        * VueRouter
        * Vuex
        * VueCLI
        * axios
    * React全家桶
        * React
        * ReactRouter
        * Redux
        * ....
    
### 知识点
* antd+ReactRouter+create-react-app搭建项目基本框架

### 面试题
* React如何实现v-if的效果
    * 三元运算

* React与其他框架的配合使用
    * jQuery

### 知识点
* 格式化数据
    [{goods:{title,item}}] -> [{title,item}]
* React.Fragment 
```jsx
    // document.createDocumentFragment
    <React.Fragment></React.Fragment> -> <></>
```


## day6-2

### 面试题
* gulp与webpack的区别
    * 构建工具
    * gulp是基于任务的构建工具，并且要手动编写代码实现每一步操作
    * webpack是基于配置的构建工具
* 跨域解决方案
    * jsonp
        * 原理
    * CORS
        * 设置响应头
        * OPTIONS:浏览器自动发起的预请求（复杂请求才会出现）
    * 服务器代理
        * 有接口但无请求权限
    * 爬虫
        * 分析源代码
        * 数据库操作
* 接口未完成时
    * mock数据
    * json-server

### 知识点
* antd
* redux
    * react 与 redux 与 react-redux
    * 核心概念
        * Store
            * state 状态（存放数据的地方）
            * 方法
                * store.getState()          获取
                * store.dispatch(action)    修改state唯一方式
                * store.subscribe(callback) 监听state的修改
        * Action
            * 格式：{type:'UPDATE_CART',payload}
        * Reducer
            * 创建store时定义的修改逻辑
            * 必须是一个**纯函数**
                * 纯函数：不会修改传入的参数，传入相同的参数得到一样的值，不对外界产生任何**副作用**
            * 必须返回一个新的state
            ```js
                // 纯函数
                function square(num){
                    return num*num
                }

                square(2);//4
                square(2);//4

                function randomNum(min,max){
                    return parseInt(Math.random()*(max-min+1))+min;
                }
                randomNum(10,20);// 11
                randomNum(10,20);// 19


                // Reducer
                function myReducer(state,action){
                    return {}
                }
            ```
* redux的使用
    1. 创建store: redux.createStore(reducer)
    2. 引入store: 
        * import store from './store';
            * 缺点：
                * 每个组件都要引入
                * 不能自动更新(手动监听+强制刷新)
        * 利用props传递store
            * context： react-redux（一个连接react组件与redux的工具）
            * 优点：只要props有修改，则自动刷新组件
    3. 操作
        * 获取state：store.getState()
        * 修改state：store.dispatch(action)
        * 监听state：store.subscribe(fn)

* react-redux
    > 是一个连接react组件与redux的工具，利用context传输store

* v-html
    `<div dangerouslySetInnerHTML={{__html:this.state.test}}></div>`
* Action Creator
    * 一个用于生成action的函数
    * bindActionCreators

## day6-3
* 项目
## day6-4
* 项目

## day6-5
* React & Redux & React-Redux 三者的关系
    * react-redux的原理：context
        * Provider
        * connect
* redux中间件
    * redux-chunk
    * redux-promise
    * redux-saga
        * Generator 生成器
            * yield
            * 
        * Iterator  迭代器
            * next()
        ```js
        // Genderator生成器函数
        function* show(){
            yield   axios.get()     暂停
            yield   200
            return  300
        }
        ```

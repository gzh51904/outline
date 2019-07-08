## day4-1

### 面试题
* Cookie、WebStorage、Session的区别
    * cookie 客户端(本地)存储技术
        * document.cookie
        * set-cookie
    * webStorage 客户端(本地)存储技术
        * sessionStorage
        * localStorage
    * session（会话，服务端存储技术，类似与cookie）
* v-model的原理与替代方案
    * 单向（v-bind）+事件(v-on)
* SPA
    * hash
        * window.onhashchange
    * history
    * vue-router

### 复习
* Vuex：状态（数据）管理工具
    * 核心概念store
        * state         data
        * getters       computed
        * mutations     methods
            * 唯一修改State的方式
            * 触发方式：store.commit(mutaition,payload)
        * actions
            * 操作mutations，一般用于异步操作
    * 使用步骤
        1. 引入: import
        2. 安装: Vue.use()
        3. 实例化
        4. 注入
        5. 使用:this.$store.state
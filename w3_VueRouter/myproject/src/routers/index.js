import Vue from 'vue'

// VueRouter的使用步骤
// 1. 引入
import VueRouter from 'vue-router'
// 2. 使用VueRouter插件
Vue.use(VueRouter);

// 引入页面组件
import Home from '../pages/Home.vue';
import Discover from '../pages/Discover.vue';
import Cart from '../pages/Cart.vue';
import Mine from '../pages/Mine.vue';

// 3. 实例化router并配置参数
let router = new VueRouter({
  // 路由页面信息配置
  routes:[
    {
      path:'/home',//当浏览器地址为#/home时，渲染Home组件
      component:Home
    },
    {
      path:'/discover',
      component:Discover
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/mine',
      component:Mine
    }
  ]
});

export default router;
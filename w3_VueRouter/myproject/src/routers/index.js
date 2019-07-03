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
import Login from '../pages/Login.vue';
import Reg from '../pages/Reg.vue';

// 3. 实例化router并配置参数
let router = new VueRouter({
    // 路由页面信息配置
    routes: [
        {
            name: 'Home',
            path: '/home',//当浏览器地址为#/home时，渲染Home组件
            component: Home
        },
        // 重定向
        {
            path: '/',
            // component:{template:'<div>404</div>'}
            redirect: {name:'Home'}
        },
        {
            name: 'Discover',
            path: '/discover',
            component: Discover
        },
        {
            
            name: "Discover",
            path: "/discover/:category",//动态路由：复用原则，category变量会自动传入$route.params.category
            component: Discover
          },
        {
            name: 'Cart',
            path: '/cart',
            component: Cart,

            //等效于<Cart username="laoxie"/>
            props:{
                username:'laoxie'
            }

            
        },
        {
            name: 'Mine',
            path: '/mine',
            component: Mine
        }, 
        {
            name: 'Login',
            path: '/login',
            component: Login,
            // 等效于：<Cart v-bind="route.params"/> == ：<Cart v-bind="{a:100,b:200}"/> == <Cart v-bind:a="100" v-bind:b="200"/>
            props:true
        }, 
        {
            name: 'Reg',
            path: '/reg',
            component: Reg,
            props:function(route){
                if(route.query.username){
                    return {
                        username:route.query.username.toUpperCase()
                    }
                }
                return {
                    className:'1904'
                }
            }
        }, 
        
    ]
});

export default router;
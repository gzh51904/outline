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


let Phone = {
    template:`<div>手机</div>`
}
let Computer = {
    template:`<div>电脑</div>`
}
let Tablet = {
    template:`<div>平板</div>`
}
let Acc = {
    template:`<div>配件</div>`
}

// 3. 实例化router并配置参数
let router = new VueRouter({
    // 路由页面信息配置
    routes: [
        {
            name: 'Home',
            path: '/home',//当浏览器地址为#/home时，渲染Home组件
            //component: Home,

            // 多路由视图的处理
            components:{
                default:Home,
                bottom:{template:'<h4>Bottom</h4>'}
            }
        },
        // 重定向
        {
            path: '/',
            // component:{template:'<div>404</div>'}
            redirect: { name: 'Home' }
        },
        {
            name: 'Discover',
            path: '/discover',
            component: Discover,

            // 嵌套路由（子路由）
            children:[
                {
                    name:'Phone',
                    path:'phone',
                    component:Phone
                },{
                    name:'Computer',
                    path:'computer',
                    component:Computer
                },{
                    name:'Tablet',
                    path:'tablet',
                    component:Tablet
                },{
                    name:'Acc',
                    path:'acc',
                    component:Acc
                }
            ]
        },
        // {

        //     path: "/discover/:category",//动态路由：复用原则，category变量会自动传入$route.params.category
        //     component: {
        //         template:`<div>子组件{{$route.params.category}}</div>`,
        //         data(){
        //             return {
        //                 num:10
        //             }
        //         },
        //         // 监听属性修改
        //         watch:{
        //             num(to,from){
        //                 console.log('watch:',to,from)
        //             },
        //             $route(t,f){
        //                 console.log('$route:',t,f)
        //             }
        //         },

        //        created(){
        //            console.log(666);

        //            window.lx = this;
        //        },
        //     //    beforeRouteUpdate(to,from,next){
        //     //        console.log(to,from)
        //     //         console.log('beforeRouteUpdate:',this.$route)
        //     //         next();
        //     //   },
        //     }
        // },
        {
            name: 'Cart',
            path: '/cart',
            component: Cart,
            meta: { requiresAuth: true },

            //等效于<Cart username="laoxie"/>
            props: {
                username: 'laoxie'
            },
            beforeEnter(to,from,next){
                console.log('Cart路由独享：beforeEnter')
                next();
            }


        },
        {
            name: 'Mine',
            path: '/mine',
            component: Mine,
            // 本组件需要登录权限才可访问
            meta: { requiresAuth: true }
        },
        {
            name: 'Login',
            path: '/login',
            component: Login,
            // 等效于：<Cart v-bind="route.params"/> == ：<Cart v-bind="{a:100,b:200}"/> == <Cart v-bind:a="100" v-bind:b="200"/>
            props: true
        },
        {
            name: 'Reg',
            path: '/reg',
            component: Reg,
            props: function (route) {
                if (route.query.username) {
                    return {
                        username: route.query.username.toUpperCase()
                    }
                }
                return {
                    className: '1904'
                }
            }
        },

    ]
});

// 全局路由守卫
// 所有的路由切换都会执行，
router.beforeEach((to,from,next)=>{
    console.log('全局：beforeEach',to);
    // 判断目标路由是否需要登录权限才可访问
    if(to.matched.some(item=>item.meta.requiresAuth)){
        let token = localStorage.getItem('Authorization');

        // 用户已登录
        if(token){
            next();
        }

        // 用户未登录
        else{
            next({
                path:'/login',
                query:{
                    redirectTo:to.fullPath
                }
            })
        }
    }else{
        next();
    }
})

router.afterEach((to,from)=>{
    console.log('全局：afterEach');
})

export default router;
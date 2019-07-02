<template>
  <div class="app">
    <!-- <nav>
      <ul>
        <li v-for="item in pages" :key="item.name">
          <router-link :to="item.path" active-class="active" tag="span">{{item.title}}</router-link>
        </li>
      </ul>
    </nav> -->
    <el-menu
      :default-active="active"
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="#58bc58"
      @select="handleSelect"
      router
    >
      <el-menu-item v-for="item in pages" :key="item.name" :index="item.path">{{item.title}}</el-menu-item>
    
    </el-menu>
    <!-- 路由配置匹配后，渲染对应的组件到router-view -->
    <router-view/>
  </div>
</template>

<script>
import Vue from "vue";

//完整引入：引入ElementUI下所有组件和样式
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
// Vue.use(ElementUI);

// 按需引入
// import {Menu,MenuItem} from 'element-ui';
// import "element-ui/lib/theme-chalk/menu.css"
// import "element-ui/lib/theme-chalk/menu-item.css"
// Vue.use(Menu);
// Vue.use(MenuItem);

// 基于babel-plugin-component的按需加载
import {Menu,MenuItem} from 'element-ui';
Vue.use(Menu);
Vue.use(MenuItem);

export default {
  name: "app",
  data() {
    return {
      pages: [
        {
          title: "首页",
          path: "/home",
          name: "Home"
        },
        {
          title: "发现",
          path: "/discover",
          name: "Discover"
        },
        {
          title: "购物车",
          path: "/cart",
          name: "Cart"
        },
        {
          title: "我的",
          path: "/mine",
          name: "Mine"
        }
      ],
      active:"/home"
    };
  },
  methods:{
    handleSelect(index,indexPaht){
      console.log(index,indexPaht);
      this.active = index
    }
  },
  created(){
    // 刷新保持高亮效果
    let hash = window.location.hash.slice(1);
    this.active = hash;
  }
 
};
</script>

<style>
.active {
  font-weight: bold;
  color: #f00;
}
</style>

<template>
  <div class="app">
    <!-- <nav>
      <ul>
        <li v-for="item in pages" :key="item.name">
          <router-link :to="item.path" active-class="active" tag="span">{{item.title}}</router-link>
        </li>
      </ul>
    </nav>-->
    <el-row>
      <el-col :span="18">
        <el-menu
          :default-active="active"
          class="el-menu-demo"
          mode="horizontal"
          active-text-color="#58bc58"
          @select="handleSelect"
          router
          v-if="menushow"
        >
          <el-menu-item v-for="item in pages" :key="item.name" :index="item.path">
            <el-badge :value="cartlen" class="item" v-if="item.name=='Cart'">{{item.title}}</el-badge>
            <template v-else>{{item.title}}</template>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6" class="login" v-if="!logined">
        <el-link href="#" @click.native.prevent.stop="goto('Reg')">注册</el-link>
        <el-link href="#" @click.native.prevent.stop="goto('Login')">登录</el-link>
      </el-col>
      <el-col :span="6" class="login" v-else>
        <el-link href="#" @click.native.prevent.stop="logout()">退出</el-link>
      </el-col>
    </el-row>

    <!-- 路由配置匹配后，渲染对应的组件到router-view -->
    <router-view/>
    <router-view name="bottom"/>
  </div>
</template>

<script>
import Vue from "vue";
import {mapState} from 'vuex';

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
import {
  Menu,
  MenuItem,
  Row,
  Col,
  Link,
  Container,
  Header,
  Aside,
  Main,
  Form,
  FormItem,
  Button,
  Input,
  Badge
} from "element-ui";
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Link);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Input);
Vue.use(Badge);

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
      active: "/home",
      logined: false
    };
  },
  computed:{
    cartlen(){
      return this.$store.state.cart.goodslist.length
    },
    // ...mapState({
    //   menushow(state){
    //     return state.common.menushow
    //   }
    // })
    menushow(){
      
      return this.$store.state.common.menushow
    }
  },
  
  methods: {
    handleSelect(index, indexPaht) {
      console.log(index, indexPaht);
      this.active = index;
    },
    goto(name) {
      this.$router.push({
        name,
        // path:'/'+name.toLowerCase(),
        params: { a: 100, b: 200 } //params只能通过name方式跳转时传参
      });
    },
    logout() {
      this.logined = false;
      localStorage.removeItem("Authorization");
    }
  },
  created() {
    console.log("this:", this);
    // 刷新保持高亮效果
    let hash = window.location.hash.slice(1);
    this.active = hash;

    let token = localStorage.getItem("Authorization");
    this.logined = token ? true : false;

    console.log('menushow:',this.$store.state)
  }
};
</script>

<style lang="scss">
// css module（OOCSS）：添加module属性
// 编译时，postcss加载器会把下面所有的样式以对象的形式呈现，并注入vue实例的$style属性
// $style = {active:xxx,login:xxx}
.active {
  font-weight: bold;
  color: #f00;
}
.login {
  text-align: right;
  line-height: 60px;
  a {
    margin-right: 10px;
  }
}
</style>

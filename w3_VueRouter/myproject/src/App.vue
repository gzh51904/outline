<template>
  <div class="app">
    <nav>
      <ul>
        <li v-for="item in pages" :key="item.name">
          <router-link 
          :to="item.path" 
          active-class="active"
          tag="span"
          >{{item.title}}</router-link>
        </li>
      </ul>
    </nav>
    <!-- 路由配置匹配后，渲染对应的组件到router-view -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      pages:[{
        title:'首页',
        path:'/home',
        name:'Home'
      },{
        title:'发现',
        path:'/discover',
        name:'Discover'
      },{
        title:'购物车',
        path:'/cart',
        name:'Cart'
      },{
        title:'我的',
        path:'/mine',
        name:'Mine'
      }]
    }
  },
  components: {
  }
}
</script>

<style>
.active{
  font-weight:bold;
  color:#f00
}
</style>

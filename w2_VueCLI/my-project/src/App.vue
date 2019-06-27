<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>HTML5 1904</h1>
    <Home/>
  </div>
</template>

<script>

// 引入其他页面
import Home from './pages/Home.vue';

export default {
  name: 'app',
  components:{
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

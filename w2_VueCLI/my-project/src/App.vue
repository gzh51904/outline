<template>
  <div class="container-fluid">
    <h1>HTML5 1904</h1>
    <TodoList/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
// 引入其他页面
// import Home from './pages/Home.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'app',
  components:{
    // Home,
    TodoList
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

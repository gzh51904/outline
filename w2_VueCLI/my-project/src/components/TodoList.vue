<template>
  <!-- 只允许有一个根元素 -->
  <div class="todoList">数量：{{qty}}
    <TodoForm :add="add"></TodoForm>
    <!-- <TodoContent :todolist="todolist" :complete="complete" :remove="remove"></TodoContent> -->
    <!-- <TodoContent :todolist="todolist" @remove="remove" v-on:complete="complete" @changeqty="changeQty"></TodoContent> -->
    <!-- TC.$on('complete',complete) -->
    <TodoContent :todolist="todolist" @remove="remove" v-on:complete="complete" :qty="20"></TodoContent>
    <!-- v-bind:qty.sync 等效于 v-on:update:qty="(n)=>{qty=n}" -->
  </div>
</template>
<script>
// 引入总线(Vue的实例)
import Bus from '../js/Bus';


import TodoForm from "./TodoForm.vue";
import TodoContent from "./TodoContent.vue";


export default {
  data() {
    return {
      todolist: [
        {
          id: Date.now(),
          title: "如果你不能拼爹，就只能拼命",
          date: "2019-6-26",
          done: false
        },
        {
          id: Date.now(),
          title: "拼搏到无能为力，坚持到感动自己",
          date: "2019-3-25",
          done: true
        }
      ],
      qty: 10
    };
  },
  methods: {
    // 简单数据的修改操作
    changeQty(num) {
      this.qty = num;
    },
    add(data) {
      // Vue.set()/this.$set()
      // unshift,pop,shift,push,splice,sort,reverse方法为变异方法，数组中只有这几个方法能够实现响应式属性
      this.todolist.unshift(data);
    },
    remove(id) {
      for (var i = 0, len = this.todolist.length; i < len; i++) {
        if (this.todolist[i].id == id) {
          break;
        }
      }
      this.todolist.splice(i, 1);
    },
    complete(id) {
      for (var i = 0, len = this.todolist.length; i < len; i++) {
        if (this.todolist[i].id == id) {
          this.todolist[i].done = true;
          break;
        }
      }
    }
  },
  created(){
    //   给总线定义三个事件
      Bus.$on('additem',this.add)
      Bus.$on('removeitem',this.remove)
      Bus.$on('completeitem',this.complete)
  },
  components: {
    TodoForm,
    TodoContent
  }
};
</script>
<style>
</style>

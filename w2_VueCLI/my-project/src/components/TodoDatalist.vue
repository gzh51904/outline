<template>
    <table class="table mt-3">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">待办事项</th>
          <th scope="col">预期时间</th>
          <th scope="col">是否完成</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <TodoItem v-for="(item,idx) in data" :key="idx" :item="item" :idx="idx"/>
      </tbody>
    </table>
</template>
<script>
import TodoItem from './TodoItem';
export default {
    props:['data'],
    components:{
      TodoItem
    }
}
</script>


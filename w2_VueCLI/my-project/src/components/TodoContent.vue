<template>
  <div class="todo-content">
    <TodoDatalist :data="weilist"/>
    <TodoDatalist :data="donelist"/>
    <div class="status">总共：{{todolist.length}}，待办：{{weilist.length}}，完成:{{donelist.length}}</div>
    <!-- <button @click="$emit('update:qty',++num)">改变数量</button> -->
  </div>
</template>
<script>
import TodoDatalist from './TodoDatalist.vue';

export default {
    // 接收属性：props属性等效于直接在data中写属性
    // props,data,computed 公用命名空间
    // props:['todolist','remove','complete'],
    // props:['todolist'],

    // 数据类型校验
    props:{
        todolist:{
            type:Array,
            required:true
        },
        qty:{
            type:[Number,String],
            required: true,  // 这个属性qty为必须属性，如果不传递则报错
            validator(value){
                return value>=5 && value<=10
            }
        }
    },
    data(){
        return {
          num:10
        }
    },
    computed:{
        weilist(){
            return this.todolist.filter(item=>!item.done)
        },
        donelist(){
            return this.todolist.filter(item=>item.done)
        }
    },
    components:{
        TodoDatalist
    }
}
</script>


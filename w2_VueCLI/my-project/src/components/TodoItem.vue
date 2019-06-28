<template>
    <tr>
          <th scope="row">{{idx+1}}</th>
          <td>{{item.title}}</td>
          <td>{{item.date}}</td>
          <td>{{item.done?'是':'否'}}</td>
          <td>
            <div class="btn-group btn-group-sm">
                <!-- 组件的属性，如果在组件中不同props接收，则自动成组件根元素的属性 -->
                <TodoButton class="btn btn-outline-primary" @click.native="complete(item.id)">完成</TodoButton>
                <TodoButton class="btn btn-outline-danger" @click.native="remove(item.id)">删除</TodoButton>
            </div>
          </td>
        </tr>
</template>
<script>
import Bus from '../js/Bus';
import TodoButton from './TodoButton';
export default {
    props:['item','idx'],
     methods:{
        remove(id){
            Bus.$emit('removeitem',id);
        },
        complete(id){
            Bus.$emit('completeitem',id)
        }
    },
    components:{
        TodoButton
    }
}
</script>


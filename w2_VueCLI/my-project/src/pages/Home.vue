<template>
    <div>
        首页
        {{username}} - {{age}}
        <button class="btn btn-danger" @click="changeAge">修改年龄</button>  
    </div>
</template>

<script>
// import '../assets/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';

export default {
    data(){
        return {
            username:'laoxie',
            age:18
        }
    },
    methods:{
        changeAge(){
            this.age = this.age + 1;
        }
    },
    created(){
        // 使用VueRouter
        // 在任意组件中通过 this.$router
    }
}
</script>
<style>

</style>


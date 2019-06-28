<template>
    <div class="input-group">
      <input type="text" class="form-control" v-model="title" ref="title" v-on:keyup.13="addhandle">
      <div class="input-group-append">
        <input type="date" v-model="date" class="border">
        <!-- <button class="btn btn-success" type="button" v-on:click="addhandle">添加</button> -->
        <TodoButton class="btn btn-success" @click.native="addhandle">添加</TodoButton>
      </div>
    </div>
</template>
<script>
import TodoButton from './TodoButton.vue';
export default {
    props:['add'],
    data(){
        return {
            title:'',
            date:''
        }
    },
    mounted(){
        let d = new Date();

        d.setDate(d.getDate()+7);

        // let dstr = d.toLocaleDateString();console.log(dstr);
        // dstr = dstr.replace(/\//g,'-');console.log(dstr);

        let year = d.getFullYear();
        let month = d.getMonth()+1;
        let date = d.getDate();

        month = ('0'+month).slice(-2);//06,012
        date = ('0'+date).slice(-2);//06,012


        this.date = `${year}-${month}-${date}`;
    },
    methods:{
        addhandle(){
            this.add({
                id:Date.now(),
                title:this.title,
                date:'2019-6-28',
                done:false
            })

            // 清空并自动获得焦点
            this.$refs.title.focus();
            this.title = ''
        }
    },
    components:{
        TodoButton
    }
}
</script>

<template>
    <div>
        <img :src="info.imgurl"/>
        <h1>{{info.name}}</h1>
        <p class="price"><del>{{(info.price*1.2).toFixed(2)}}</del><span>{{(info.price*1).toFixed(2)}}</span></p>
        <el-button type="danger" @click="add2cart">添加到购物车</el-button>
    </div>
</template>
<script>
import {mapMutations} from 'vuex';
export default {
    data(){
        return {
            info:{}
        }
    },
    async created(){
    //   获取传入id
    let {id} = this.$route.params;

    // 发起ajax请求，获取商品信息
     let {data} = await this.$axios.get('/goods/'+id);
     data = data.data[0]
     console.log(data)

     data.imgurl = require('../assets/'+data.imgurl);

     this.info = data;

        //  隐藏菜单
        this.displayMenu(false);
    },
    destroyed(){
        this.displayMenu(true);
    },
    methods:{
        add2cart(){
            let {commit,state} = this.$store
            let {goodslist} = state.cart;
            let {id} = this.info;
            // 判断当前商品是否已经存在购物车中
            // 存在：数量+1
            // 不存在：添加（数量为1）
            let current = goodslist.filter(item=>item.id==id)[0];
            if(current){
                commit('changeQty',{id:this.info.id,qty:current.qty+1})
            }else{
                commit('add',{qty:1,...this.info});
            }
        },
        ...mapMutations(['displayMenu'])
    }

}
</script>
<style scoped>
    img{width:400px;}
</style>

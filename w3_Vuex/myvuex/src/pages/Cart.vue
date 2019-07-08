<template>
  <div>
    <el-table :data="cartlist" stripe style="width: 100%">
      <el-table-column prop="idx" label="#" width="100"></el-table-column>
      <el-table-column prop="imgurl" label="商品图片" width="180">
          <template slot-scope="scope">
            <img :src="scope.row.imgurl" style="width:60px;height:60px;"/>
          </template>
      </el-table-column>
      <el-table-column prop="name" label="商品名称" width="180"></el-table-column>
      <el-table-column prop="price" label="商品价格" width="180"></el-table-column>
      <el-table-column
      label="数量"
      width="180">
        <template slot-scope="scope">
        <el-input-number size="mini" v-model="scope.row.qty" @change="changeQty(scope.row,$event)"></el-input-number>
        </template>
    </el-table-column>
      
      <el-table-column
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="remove(scope.row.id)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    <div>总价：￥ {{totalPrice.toFixed(2)}}</div>
  </div>
</template>
<script>
import Vue from 'vue';
import {mapState,mapMutations} from 'vuex';
import {Table,TableColumn,InputNumber} from 'element-ui';
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(InputNumber);

export default {
  computed: {
    // cartlist() {
    //   return this.$store.state.goodslist.map((item,idx)=>{
    //       return {
    //           idx:idx+1,
    //           ...item
    //       }
    //   })
    // },
    // 映射写法
    // ...mapState([
    //     'goodslist' 
    // ]),
    //等效于 
    // goodslist(){ return this.$store.state.goodslist},
    ...mapState({
      cartlist(state){
        return state.cart.goodslist;
      }
    }),
    //等效于 
    // cartlist(){return this.$store.state.goodslist},
    totalPrice(){
        return this.$store.state.cart.goodslist.reduce((pre,item)=>{
            return pre + item.price*item.qty
        },0)
    }
  },
  methods:{
      // 映射vuex方法（mutaions,actoion）
      ...mapMutations(['remove']),

      // 等效于
      // remove(row){
      //     this.$store.commit('remove',row.id)
      // },

       ...mapMutations({
            // 函数形式：
            changeQty:(commit,row,qty)=>{
                commit('changeQty',{id:row.id,qty});
            }
        }),
      // changeQty(row,qty){
      //   console.log(row,qty)
    
      //     this.$store.commit('changeQty',{id:row.id,qty});

      //   //   console.log(this.$store.state.goodslist)
      // }
  },
  created() {
    console.log("Cart:", this);
  }
};
</script>

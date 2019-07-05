<template>
  <div>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <!-- 推荐 -->
    <el-row :gutter="20">
      <el-col :span="4" v-for="item in recommed" :key="item.id" @click.native="goto(item.id)">
        <img style="width: 100px; height: 100px" :src="item.imgurl"/> 
        <h4>{{item.name}}</h4>
        <p class="price"><del>{{(item.price*1.2).toFixed(2)}}</del><span>{{(item.price*1).toFixed(2)}}</span></p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Vue from "vue";
import { Carousel, CarouselItem ,Image} from "element-ui";
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Image);
export default {
  data() {
    return {
      recommed: []
    };
  },
  methods:{
    goto(id){
      this.$router.push({name:'Goods',params:{id}})
    }
  },
  async created() {
    let { data } = await this.$axios.get("/goods");
    console.log("data:", data);

    this.recommed = data.data.slice(0,20).map(item=>{
      // item.imgurl = '../assets/'+item.imgurl;
      // let context = require.context('../assets',false,/\.jpg$/);
      // item.imgurl = context('./' + item.imgurl);
      item.imgurl = require('../assets/' + item.imgurl);// ../assets/img/xxx.jpg
      return item;
    })

      // console.log(context.keys())
      
  }
};
</script>

<style scoped lang="scss">
/* scoped：局部样式
  原理：通过给元素添加随机的hash编码，并设置css属性来实现
 */
.price{
  font-size:12px;
  del{
    color:#999;
    &::before{
      content:'￥'
    }
  }
  span{
    margin-left:5px;color:#f00;
    &::before{
      content:'￥'
    }
  }
}
</style>


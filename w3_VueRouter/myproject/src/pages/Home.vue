<template>
  <div>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import Vue from 'vue';
import {Carousel,CarouselItem} from 'element-ui';
Vue.use(Carousel);
Vue.use(CarouselItem);
export default {};
</script>

<style scoped>
/* scoped：局部样式
  原理：通过给元素添加随机的hash编码，并设置css属性来实现
 */
  a{color:#f00 !important}
</style>


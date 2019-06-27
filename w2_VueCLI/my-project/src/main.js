import Vue from 'vue';
import App from './App.vue';

// let myvue = require('vue');console.log('myvue',myvue)

// Vue.config.productionTip = false;

// // 引入模块对象的属性
// import {password as psw,username} from './js/common';

// // 引入模块对象中的default属性
// import xxx from './js/common';
// console.log('common:',psw,username)
// console.log('default:',xxx)

// // 引入模块对象中所有属性，并赋值给all
// import * as all from './js/common';
// console.log('all:',all);

new Vue({
  render: h => {
    return h(App)
  },
}).$mount('#app')

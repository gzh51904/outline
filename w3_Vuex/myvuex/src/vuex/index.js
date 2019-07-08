import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import getters from './getters';
import mutations from './mutations';

import cart from './modules/cart'
import common from './modules/common'


const store = new Vuex.Store({
    // state 模块化
    modules:{
        cart,
        common
    },

    // getters
    // 一般用于对state进行处理
    //getters,

    // mutations
    // 修改state的唯一方式
    // 触发方式：store.commit('add',{name:'显示器'})
    //mutations
});

export default store;
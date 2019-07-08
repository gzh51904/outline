// import cartMutations from './cartMutations';

export default {
    // 添加商品
    add(state,goods){
        // state:就是state
        // payload:触发add方法时传入的参数
        state.cart.goodslist.unshift(goods);
    },

    // 删除商品
    remove(state,id){
        state.cart.goodslist = state.cart.goodslist.filter(item=>item.id!=id);
    },

    // 修改数量
    changeQty(state,{id,qty}){
        state.cart.goodslist.forEach(item=>{
            if(item.id == id){
                item.qty = qty
            }
        })
    },
    // ...cartMutations,

    displayMenu(state,isShow){
        state.common.menushow = isShow;
    }
}
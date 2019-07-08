export default {
    saleGoodslist(state){
        return state.goodslist.map(item=>{
            item.price *= 0.8;
            return item;
        })
    }
}
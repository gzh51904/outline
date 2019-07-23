import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import ActionCreator,{removeAction,changeQtyAction} from '../../store/cartActions'

let Cart = (props)=>{
    console.log('Cart:',props)
    return <div>购物车</div>
}


Cart = connect((state)=>{
    return {
        goodslist:state.goodslist,
        totalPrice:state.goodslist.reduce((prev,item)=>prev+item.goods_promotion_price*item.qty,0)
    }
},(dispatch)=>{
    // return {
    //     addAction(goods){
    //         dispatch(addAction(goods))
    //     },
    //     removeAction(id){
    //         dispatch(removeAction(id))
    //     },
    //     changeQtyAction({id,qty}){
    //         dispatch(changeQtyAction({id,qty}))
    //     }
    // }

    // 下面的代码，等效于上面的代码
    return bindActionCreators(ActionCreator,dispatch)
})(Cart)

export default Cart;
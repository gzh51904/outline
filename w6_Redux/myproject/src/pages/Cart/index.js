import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import ActionCreator,{removeAction,changeQtyAction} from '../../store/cartActions'

import { List, Avatar, Button, InputNumber } from 'antd';

let Cart = (props)=>{
    console.log('Cart:',props)

    let removeItem = (id)=>{
        props.removeAction(id)
    }
    return <List
    itemLayout="horizontal"
    dataSource={props.goodslist}
    renderItem={item => (
      <List.Item actions={[<Button size="small" type="danger" shape="circle" icon="delete" onClick={removeItem.bind(null,item.id)}></Button>]}>
        {/* <Skeleton avatar title={false} loading={item.loading} active> */}
          <List.Item.Meta
            avatar={
              <Avatar src={item.imgurl} />
            }
            title={<a href="https://ant.design">{item.name}</a>}
            description="xxx"
          />
          <div><InputNumber size="small" min={1} max={5} value={item.qty} onChange={(qty)=>{
              props.changeQtyAction({id:item.id,qty})
          }}/></div>
        {/* </Skeleton> */}
      </List.Item>
    )}
  />
}


Cart = connect((state)=>{
    let {goodslist} = state.cart;
    return {
        goodslist,
        totalPrice:goodslist.reduce((prev,item)=>prev+item.goods_promotion_price*item.qty,0)
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
    return {
        ...bindActionCreators(ActionCreator,dispatch),
        dispatch
    }
})(Cart)

export default Cart;
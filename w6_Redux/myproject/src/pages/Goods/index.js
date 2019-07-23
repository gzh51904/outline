import React, { Component } from 'react';

import { api } from '../../utils';

// import store from '../../store';

import { List, Card, Button, Icon} from 'antd';
import {connect} from 'react-redux';
import {addAction} from '../../store/cartActions';

class Goods extends Component {
    constructor() {
        super();

        this.state = {
            info: {},
            recommed: []
        }
    }
    async componentWillMount() {
        let { id } = this.props.match.params;
        let { data: { datas } } = await api.get('/index.php', {
            params: {
                act: 'goods',
                op: 'goods_detail',
                goods_id: id
            }
        });

        console.log('data:', datas);

        this.setState({
            info: {
                ...datas.goods_info,
                imgurl: datas.goods_image,
            },
            recommed: datas.goods_commend_list
        })


        // store.subscribe(()=>{
        //     console.log('subscribe:',store.getState())
        // })
    }
    render() {
        let { info,recommed } = this.state;
        let {add2cart} = this.props;

        console.log('Goods.props',this.props)
        

        return (
            <div style={{ padding: '15px' }}>
                <div style={{textAlign:'center'}}><img src={info.imgurl} alt={info.goods_name} /></div>
                <h1>{info.goods_name}</h1>
                <p>{info.goods_promotion_price}</p>

                <Button type="danger" size="large" onClick={()=>{
                    // store.dispatch({type:'add_to_cart',payload:{id:info.goods_id,name:info.goods_name,price:info.goods_promotion_price}})
                    // dispatch({type:'add_to_cart',payload:{id:info.goods_id,name:info.goods_name,price:info.goods_promotion_price}})
                    add2cart({id:info.goods_id,name:info.goods_name,price:info.goods_promotion_price})
                }}><Icon type="shopping-cart" />加入购物车</Button>

                {/* 推荐列表 */}
                <h4>推荐商品</h4>
                <List
                    grid={{
                        gutter: 16,
                        xs: 2,
                        sm: 3,
                        md: 4,
                        lg: 5,
                        xl: 6,
                        xxl: 7,
                    }}
                    dataSource={recommed}
                    renderItem={item => (
                        <List.Item>
                            <Card title={item.goods_name}>
                                <img src={item.goods_image_url} alt={item.goods_name} style={{width:'100%'}}/>
                                <p className="price"><span>{item.goods_promotion_price}</span></p>
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

let mapStateToProps = (state,ownprops)=>{
    return {

    }
}

let mapDispatchToProps = (dispatch,ownprops)=>{
    return {
        add2cart(goods){
            dispatch(addAction(goods))
        }
    }
}

Goods = connect(mapStateToProps,mapDispatchToProps)(Goods);

export default Goods;
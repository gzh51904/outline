import React, { Component } from 'react';

import { api } from '../../utils';

import { List, Card, Button, Icon} from 'antd';

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
    }
    render() {
        let { info,recommed } = this.state;
        return (
            <div style={{ padding: '15px' }}>
                <div style={{textAlign:'center'}}><img src={info.imgurl} alt={info.goods_name} /></div>
                <h1>{info.goods_name}</h1>

                <Button type="danger" size="large"><Icon type="shopping-cart" />加入购物车</Button>

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

export default Goods;
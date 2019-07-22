import React, { Component } from 'react';

import {api} from '../../utils';


class Goods extends Component{
    async componentWillMount(){
        let {id} = this.props.match.params;
        let {data} = await api.get('/index.php',{
            params:{
                act:'goods',
                op:'goods_detail',
                goods_id:id
            }
        });

        console.log('data:',data)
    }
    render(){
        return (
            <div>商品详情页</div>
        )
    }
}

export default Goods;
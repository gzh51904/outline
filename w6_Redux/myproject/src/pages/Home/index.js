import React,{Component,Fragment} from 'react';

import {api} from '../../utils';

import { Carousel,  Row, Col} from 'antd';


class Home extends Component{
    constructor(){
        super();

        this.state = {
            recommend:[],
            datalist:[]
        }

        this.goto = this.goto.bind(this);
    }
    // 生命周期函数
    async componentWillMount(){
        let {data} = await api.get('index.php?act=index',{
            // params:{
            //     act:'index'
            // }
        })

        console.log(data)

        let recommend = data.datas[0].adv_list.item;
        let datalist = data.datas.slice(1).map(item=>item.goods)

        // 设置轮播图
        this.setState({
            recommend,
            datalist
        })
    }

    // 页面跳转
    goto(id){
        let {history} = this.props;

        let pathname = '/goods/'+id;console.log('id',id,pathname)

        history.push({
            pathname
        })
    }

    render(){
        let {recommend,datalist} = this.state;
        return (
            <div>
                 {/* 轮播图 */}
                 <Carousel autoplay>
                    {
                        recommend.map((item,idx)=><div key={idx}>
                            <img src={item.image} alt={item.data} style={{width:'100%'}} />
                        </div>)
                    }
                </Carousel>

            {/* 列表 */}
            {
                datalist.map(({title,item})=>{
                    return (
                    // <Fragment key={title} style={{padding:'0 10px'}}>
                    <div key={title} style={{padding:'0 10px'}}>
                        <h2>{title}</h2>
                        <Row gutter={16} justify="center">
                            {
                                item.map(item=><Col key={item.goods_id} className="gutter-row" span={6} style={{height:'285px'}} onClick={this.goto.bind(this,item.goods_id)}>
                                    <img src={item.goods_image} alt={item.goods_name} style={{width:'90%'}}/>
                                    <h4>{item.goods_name}</h4>
                                    <p className="price"><del>{item.goods_price}</del><span>{item.goods_promotion_price}</span></p>
                                </Col>)
                            }
                            
                        </Row>
                    {/* </Fragment> */}
                    </div>
                    )
                })
            }
            
            </div>
        )
    }
}

export default Home;

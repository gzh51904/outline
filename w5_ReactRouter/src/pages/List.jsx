import React,{Component} from 'react';
import { withStorage } from '../hoc';
import {NavLink,Route,Switch,Redirect} from 'react-router-dom';

@withStorage
class List extends Component{
    constructor(){
        super();
        this.state = {
            goodslist:[{
                id:1,
                name:'商品1',
                price:998,
                imgurl:'img/g1.jpg'
            },{
                id:2,
                name:'商品1',
                price:998,
                imgurl:'img/g1.jpg'
            }],
            menu:[{
                name:'Maotai',
                title:'茅台',
                path:'/maotai'
            },{
                name:'WLY',
                title:'五粮液',
                path:'/wly'
            },{
                name:'XO',
                title:'XO',
                path:'/xo'
            },{
                name:'zhujiang',
                title:'珠江纯生',
                path:'/zhujiang'
            }]
        }

        this.goto = this.goto.bind(this);
    }
    // componentWillMount(){
    //     let token = localStorage.getItem('Authorization');

    //     this.setState({
    //         token
    //     })
    // }

    goto(id){
        let {history} = this.props;

        // history.push('/goods/'+id);
        history.push({
            pathname: '/goods/'+id,
            search: '?n='+Date.now(),
            state: { price: 998 }
        });
    }
    render(){
        console.log('list',this.props)
        let {url,path} = this.props.match;
        return <div>
            <nav>
                {
                    this.state.menu.map(function(item){
                        return <NavLink to={url + item.path} key={item.name} style={{margin:'0 10px'}} activeStyle={{color:'#f00'}}>{item.title}</NavLink>
                    })
                }
                
            </nav>
            <Switch>
                <Route path={path+'/maotai'} render={()=>{
                    return <div>
                        {
                            this.state.goodslist.map(item=>{
                                return <div key={item.id} onClick={this.goto.bind(this,item.id)}>
                                    <img src={item.imgurl}/>
                                    <h4>茅台{item.name}</h4>
                                    <p className="price">价格：{item.price.toFixed(2)}</p>
                                </div>
                            })
                        }
                    </div>
                }}/>
                <Route path={path+'/wly'} render={()=>{
                    return <div>
                        {
                            this.state.goodslist.map(item=>{
                                return <div key={item.id} onClick={this.goto.bind(this,item.id)}>
                                    <img src={item.imgurl}/>
                                    <h4>五粮液{item.name}</h4>
                                    <p className="price">价格：{item.price.toFixed(2)}</p>
                                </div>
                            })
                        }
                    </div>
                }}/>

                <Route path={path+'/zhujiang'} render={()=>{
                    return <div>
                        {
                            this.state.goodslist.map(item=>{
                                return <div key={item.id} onClick={this.goto.bind(this,item.id)}>
                                    <img src={item.imgurl}/>
                                    <h4>珠江纯生{item.name}</h4>
                                    <p className="price">价格：{item.price.toFixed(2)}</p>
                                </div>
                            })
                        }
                    </div>
                }}/>

                <Route path={path+'/xo'} render={()=>{
                    return <div>
                        {
                            this.state.goodslist.map(item=>{
                                return <div key={item.id} onClick={this.goto.bind(this,item.id)}>
                                    <img src={item.imgurl}/>
                                    <h4>XO{item.name}</h4>
                                    <p className="price">价格：{item.price.toFixed(2)}</p>
                                </div>
                            })
                        }
                    </div>
                }}/>
                <Redirect to={path+'/maotai'}/>
            </Switch>

            {/* {
                this.state.goodslist.map(item=>{
                    return <div key={item.id} onClick={this.goto.bind(this,item.id)}>
                        <img src={item.imgurl}/>
                        <h4>{item.name}</h4>
                        <p className="price">价格：{item.price.toFixed(2)}</p>
                    </div>
                })
            } */}
        </div>
    }
}

// List = withStorage(List);

export default List;
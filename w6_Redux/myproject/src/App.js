import React, { Component } from 'react';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { Menu, Icon, Badge} from 'antd';

import { connect } from 'react-redux';
// import store from './store';

import Home from './pages/Home';
import List from './pages/List';
import Cart from './pages/Cart';
import Mine from './pages/Mine';
import Goods from './pages/Goods';




let AllRouter = {
  Home,
  List,
  Cart,
  Mine
}

// @withRouter
class App extends Component {
  constructor() {
    super();
    this.state = {
      navs: [
        {
          name: 'Home',
          path: '/home',
          icon: 'home',
          title: '首页'
        },
        {
          name: 'List',
          path: '/list',
          icon: 'bars',
          title: '商品列表'
        },
        {
          name: 'Cart',
          path: '/cart',
          icon: 'shopping-cart',
          title: '购物车'
        },
        {
          name: 'Mine',
          path: '/mine',
          icon: 'user',
          title: '我的'
        }
      ],
      current:'Home',
      test:'<strong>laoxie</strong>'
    }

    // 改变This指向
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(data){
    console.log(data);

    this.setState({
      current:data.key
    })

    // 路由跳转
    // 获取点击的路由路径
    let currentRouter = this.state.navs.filter(item=>item.name===data.key)[0];
    this.props.history.push(currentRouter.path)
  }
  componentDidMount(){
    // 监听state的修改
    // store.subscribe(()=>{
    //   console.log(666);
    //   this.forceUpdate();
    // })
  }
  render() {
    // 在React组件中获取state
    // let {goodslist} = store.getState();console.log('goodslist:',goodslist)

    console.log('App.props',this.props)

    let {navs} = this.state;
    let {goodslen} = this.props;
    return (
      <div className="App">
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          {
            navs.map(item=>(
              <Menu.Item key={item.name}>
                {
                  item.name==='Cart'? 
                  <Badge count={goodslen}>
                    <Icon type={item.icon} />
                    {item.title}
                  </Badge>
                  :
                  <>
                  <Icon type={item.icon} />
                  {item.title}
                  </>
                }
              </Menu.Item>
            ))
          }
          </Menu>
          {/* <div dangerouslySetInnerHTML={{__html:this.state.test}}></div> */}

          {/* 路由信息 */}
          <Switch>
          {
            navs.map(item=><Route key={item.name} path={item.path} component={AllRouter[item.name]}/>)
          }
          {/* <Route path="/home" component={Home}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/list" component={List}/>
          <Route path="/mine" component={Mine}/> */}
          <Route path="/goods/:id" component={Goods}/>
          <Redirect from="/" to="/home" exact/>
          </Switch>
          
      </div>
    );
  }
}

App = withRouter(App);

// 利用高阶组件connect连接当前组件与store
// 把store中的数据通过props传入当前组件
let mapStateToProps = (state)=>{
  return {
    goodslen:state.cart.goodslist.length
  }
}
App = connect(mapStateToProps)(App)

export default App;

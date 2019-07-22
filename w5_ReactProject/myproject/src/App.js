import React, { Component } from 'react';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { Menu, Icon } from 'antd';

import Home from './pages/Home';
import List from './pages/List';
import Cart from './pages/Cart';
import Mine from './pages/Mine';

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
      current:'Home'
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
  render() {
    let {navs} = this.state;
    return (
      <div className="App">
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          {
            navs.map(item=>(
              <Menu.Item key={item.name}>
                  <Icon type={item.icon} />
                  {item.title}
              </Menu.Item>
            ))
          }
          </Menu>

          {/* 路由信息 */}
          <Switch>
          {
            navs.map(item=><Route key={item.name} path={item.path} component={AllRouter[item.name]}/>)
          }
          {/* <Route path="/home" component={Home}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/list" component={List}/>
          <Route path="/mine" component={Mine}/> */}
          <Redirect from="/" to="/home" exact/>
          </Switch>
      </div>
    );
  }
}

App = withRouter(App)

export default App;

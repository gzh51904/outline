import React,{Component} from 'react';

import {Route,Redirect,Switch,NavLink,withRouter} from 'react-router-dom';
// withRouter:高阶组件

import Home from './pages/Home';
import List from './pages/List';
import Cart from './pages/Cart';
import Mine from './pages/Mine';

const page404 = ()=><div>404</div>

class App extends Component{
    constructor(){
        super();

        this.state = {
            navs:[{
                name:'Home',
                path:'/home',
                title:'首页'
            },{
                name:'List',
                path:'/list',
                title:'列表'
            },{
                name:'Cart',
                path:'/cart',
                title:'购物车'
            },{
                name:'Mine',
                path:'/mine',
                title:'我的'
            }]
        }

        // 改变this指向
        this.goto = this.goto.bind(this)
    }
    goto(path){
        // 编程式导航
        // 如何获取history
        let {history} = this.props;
        console.log(path)
        history.push(path);
    }
    render(){
        console.log('app',this.props)
        return <div>
                <ul>
                    {
                        this.state.navs.map(item=>{
                            return <li key={item.name} onClick={this.goto.bind(this,item.path)}>
                                {/* <NavLink to={item.path} activeStyle={{color:'#f00',fontWeight:'bold'}}>{item.title}</NavLink> */}
                                {item.title}
                            </li>
                        })
                    }
                </ul>
                <Switch>
                    {/* <Route path="/" component={Home} exact/> */}
                    <Route path="/home" component={Home}/>
                    <Route path="/list" component={List}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/mine" component={Mine}/>
                    <Route path="/404" render={()=><div>oh no 404</div>}/>
                    <Redirect from="/" to="/home" exact/>
                    <Redirect from="/*" to="/404"/>
                </Switch>
        </div>
    }
}

App = withRouter(App)

export default App;
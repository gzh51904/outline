import React,{Component} from 'react';

class Home extends Component{
    constructor(){
        super();

        this.state = {
            num:10
        }

        console.log('Home.construtor');
    }

    // 生命周期函数
    componentWillMount(){
        console.log('Home.componentWillMount');
    }
    componentDidMount(){
        console.log('Home.componentDidMount');
    }
    componentWillUpdate(){
        console.log('Home.componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('Home.componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('Home.componentWillUnmount');
    }

    // 特殊生命周期函数
    componentWillReceiveProps(nextProps){
        // 1. 由于父组件的更新导致子组件更新
        console.log('Home.componentWillReceiveProps',nextProps);
    }

    // 是否重渲染当前组件（是否执行render）
    // 必须返回一个boolean（默认true）
    // 可以利用这个生命周函数进行性能优化
    shouldComponentUpdate(nextProps, nextState){
        // console.log(nextProps,this.props)
        // if(nextProps.parentnum === this.props.parentnum){
        //     return false;
        // }
        // return true;

        // 需求：num大于等于20才渲染组件
        if(nextState.num === this.state.num){
            return false;
        }
        return nextState.num>=20
    }
    render(){
        console.log('Home.render');
        return <div>
            <div>Home</div>
            <button onClick={()=>{this.setState({num:this.state.num+1})}}>HomeNum:{this.state.num}</button>
        </div>
    }
}

export default Home;
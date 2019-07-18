import React,{Component} from 'react';

import TodoList from './components/TodoList';
import Home from './pages/Home';

class App extends Component{
    constructor(){
        super();

        this.state = {
            parentNum:100
        }
    }
    render(){
        let {parentNum} = this.state
        return <div>
            {/* <TodoList/> */}
            <Home parentnum={this.state.parentNum}/>
            <button onClick={()=>{
                // this.setState({parentNum:parentNum+1})
                this.forceUpdate()
            }}>parentNum:{parentNum}</button>
        </div>
    }
}

export default App;
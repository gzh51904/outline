import React,{Component} from 'react';

// function TodoForm({addItem}){
//     return <div>
//         <input type="text"/>
//         {/* <button onclick="addItem()">添加</button> */}
//         <button onClick={addItem}>添加</button>
//     </div>
// }

// 当函数组件无法实现效果时，可以采用类组件
class TodoForm extends Component{
    constructor(){
        super();

        this.state = {
            keyword:''
        }

        this.addParentItem = this.addParentItem.bind(this);
        this.handleKeyup = this.handleKeyup.bind(this);
    }

    // 事件处理函数默认没有this
    // Cannot read property 'setState' of undefined
    changeKeyword(e){
        console.log(e.currentTarget)
        this.setState({
            keyword:e.target.value
        })
    }

    addParentItem(){
        this.props.addItem(this.state.keyword);

        // 清空并获得焦点
        this.setState({
            keyword:''
        });
        this.refs.keyword.focus();

    }

    handleKeyup(e){
        if(e.keyCode === 13){
            this.addParentItem()
        }
    }
    render(){
        return <div>
            {/* 给表单绑定value值时必须同时提供onChange修改事件 */}
            <input type="text" ref="keyword" value={this.state.keyword} onKeyUp={this.handleKeyup} onChange={this.changeKeyword.bind(this)} />
            <button onClick={this.addParentItem}>添加</button>
        </div>
    }
}

export default TodoForm;
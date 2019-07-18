
import React,{Component} from 'react';

import TodoForm from './TodoForm';
import TodoContent from './TodoContent';

import '../css/bootstrap.css';

// 引入context
import MyContext from '../context';


class TodoList extends Component{
    // 初始化
    constructor(){
        super();
        
        // 状态
        this.state = {
            data:[
                {
                    id:1,
                    content:'完成React项目',
                    date:'2019-7-28',
                    done:false
                },
                {
                    id:2,
                    content:'面试',
                    date:'2019-8-18',
                    done:true
                }
            ]
        }

        // 常用操作：在constructor中，修改事件处理函数的this指向
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.completeItem = this.completeItem.bind(this);

    }

    // 添加
    addItem(content){console.log('this:',this.state,content)
        // 唯一修改state的方式：this.setState()
        let data = this.state.data;
        let newContent = {
            id:Date.now(),
            content,
            done:false,
            date:`2019-7-17`
        }
        this.setState({
            data:[newContent,...data]
        })
    }

    // 删除
    removeItem(id){
        let data = this.state.data;

        // 利用过滤达到删除的效果
        data = data.filter(item=>item.id!=id);

        this.setState({
            data
        })
    }


    // 完成
    completeItem(id){
        let data = this.state.data;


        data = data.map(item=>{
            if(item.id==id){
                item.done = true;
            }

            return item;
        });

        this.setState({
            data
        })
    }

    render(){
        return <div className="p-3">
            <MyContext.Provider value={{completeItem:this.completeItem,removeItem:this.removeItem}}>
                <TodoForm addItem={this.addItem}/>
                <TodoContent data={this.state.data}/>
            </MyContext.Provider>
        </div>
    }
}

export default TodoList;
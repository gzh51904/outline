import React from 'react';

import TodoItem from './TodoItem';

import '../css/todolist.scss';

function TodoContent({data}){
    let willData = data.filter(item=>!item.done);
    let doneData = data.filter(item=>item.done);
    return <table className="table">
        <thead>
            <tr>
                <th>#</th>
                <th>待办事项</th>
                <th>时间</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
        {
            willData.map((item,idx)=>{
                return <TodoItem data={item} idx={idx} key={item.id}/>
            })
        }
        </tbody>
        <tbody>
        {
            doneData.map((item,idx)=>{
                return <TodoItem data={item} idx={idx} key={item.id}/>
            })
        }
        </tbody>
    </table>
}

export default TodoContent;
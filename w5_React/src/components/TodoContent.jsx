import React from 'react';

import TodoItem from './TodoItem';

function TodoContent({data}){
    return <table>
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
            data.map((item,idx)=>{
                return <TodoItem data={item} idx={idx} key={item.id}/>
            })
        }
        </tbody>
    </table>
}

export default TodoContent;
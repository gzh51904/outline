import React from 'react';

function TodoItem({data,idx}){
    return <tr>
        <td>{idx+1}</td>
        <td>{data.content}</td>
        <td>{data.date}</td>
        <td>
            <button>完成</button>
            <button>删除</button>
        </td>
    </tr>
}

export default TodoItem;
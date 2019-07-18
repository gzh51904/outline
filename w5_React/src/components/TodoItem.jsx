import React from 'react';

import MyContext from '../context';

function TodoItem({data,idx}){
    return <tr>
        <td>{idx+1}</td>
        <td>{data.content}</td>
        <td>{data.date}</td>
        <td>
            <MyContext.Consumer>
                {
                    ({completeItem,removeItem})=>{
                        // console.log('TodoItem.value:',value)
                        return <div className="btn-group btn-group-sm">
                            {
                                data.done ? null : <button className="btn btn-success" onClick={()=>{completeItem(data.id)}}>完成</button>
                            }
                            
                            <button className="btn btn-danger" onClick={removeItem.bind(this,data.id)}>删除</button>
                        </div>
                    }
                }
            
            </MyContext.Consumer>
        </td>
    </tr>
}

// TodoItem.contextType = MyContext;

export default TodoItem;
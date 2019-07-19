import React from 'react';

export function withStorage(InputComponet){
    let token = localStorage.getItem('Authorization');
    return function(props){
        return <InputComponet {...props} token={token}/>
    }
}


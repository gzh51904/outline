/**
 * 用户reducer
 */

let initState = {
    loginStatus:false,
    username:''
}

let reducer = (state=initState,action)=>{
    switch(action.type){
        // dispatch({type:'CHANGE_NUMEN_STATUS',payload:false})
        case 'LOGIN':
            return {
                ...state,
                loginStatus:true,
                username:action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                loginStatus:false,
                username:''
            }
        
        default:
            return state;
    }
}

export default reducer;
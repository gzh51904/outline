/**
 * 公共reducer
 */

let initState = {
    menuShow:true
}

let reducer = (state=initState,action)=>{
    switch(action.type){
        // dispatch({type:'CHANGE_NUMEN_STATUS',payload:false})
        case 'CHANGE_NUMEN_STATUS':
            return {
                ...state,
                menuShow:action.payload
            }
        
        default:
            return state;
    }
}

export default reducer;
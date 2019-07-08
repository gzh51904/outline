export default {
    state:{
        menushow:true
    },
    mutations:{
        displayMenu(state, isShow) {
            state.menushow = isShow;
        }
    }
}
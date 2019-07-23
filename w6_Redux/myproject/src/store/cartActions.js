export const  ADD_TO_CART = 'ADD_TO_CART'
export const  REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const  CHANGE_GOODS_QTY = 'CHANGE_GOODS_QTY'


export function addAction(goods){
    return {
        type:ADD_TO_CART,
        payload:goods
    }
}
export function removeAction(id){
    return {
        type:REMOVE_FROM_CART,
        payload:id
    }
}
export function changeQtyAction({id,qty}){
    return {
        type:CHANGE_GOODS_QTY,
        payload:{id,qty}
    }
}

export default {
    addAction,
    removeAction,
    changeQtyAction
}
import axios from 'axios';

// 基本配置：
//axios.defaults.baseURL = 'https://www.nanshig.com/mobile/index.php';//?act=index
let instance = axios.create({
    baseURL: 'https://www.nanshig.com/mobile'
})

export function get(url='',params={}){
    return instance.get(url,params)
}

export function post(url='',data={},params={}){
    return instance.get(url,data,params)
}

export default {
    get,
    post
}

// 模块对象
// {
//     get,
//     post,
//     default:{
//         get,
//         post
//     }
// }
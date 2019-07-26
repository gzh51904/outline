/**
     * saga文件
        * Generator 生成器函数
            * yield
 */
import {call,apply,put,takeEvery,takeLatest} from 'redux-saga/effects'
 import axios from 'axios';

 function* helloSaga(){
    yield console.log('hello saga')
 }

 function* login(action){
    // 暂停
    // let data = yield axios.get('/login',{params:{username:'laoxie',password:'1234'}})
    let data = yield call(axios.get,'/login',{params:{username:'laoxie',password:'1234'}})
    // redux action
    // yield dispatch({type:'LOGIN',payload:data.username})
    yield put({type:'LOGIN',payload:data.username})
}


function * rootSaga(){console.log('root Saga')
    // 监听saga action
    // yield takeEvery('LOGIN_ASYNC',login);// 允许同时执行多个saga action
    yield takeLatest('LOGIN_ASYNC',login);
}

 export default rootSaga;
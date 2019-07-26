import {createStore} from 'redux';

import reducer from '../reducer';

// 创建Store
// 定义state的修改逻辑：Reducer
let store = createStore(reducer);

export default store;
import {createStore,applyMiddleware} from 'redux';

// 浏览器调试工具
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from '../reducer';

import rootSaga from '../middleware/saga';

// 1. 引入redux-saga
import createSagaMiddleware from 'redux-saga';

 // 2.创建saga中间件
 const sagaMiddleware = createSagaMiddleware();

// 创建Store
// 定义state的修改逻辑：Reducer
// createStore(reducer[,initState][,middleware]);
// let store = createStore(reducer);

// 3.将 sagaMiddleware 连接至 Store
// let store = createStore(reducer,applyMiddleware(sagaMiddleware));

// redux浏览器调试工具+saga
let store = createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));

// 4.运行 Saga配置(自定义配置文件)
sagaMiddleware.run(rootSaga);

export default store;
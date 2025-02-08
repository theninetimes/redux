import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) 
  : compose;

// 使用 composeEnhancers 来组合中间件
const enhancer = composeEnhancers(applyMiddleware(thunk));

// 直接将 enhancer 作为第二个参数传递给 createStore
const store = createStore(reducer, enhancer);

export default store;
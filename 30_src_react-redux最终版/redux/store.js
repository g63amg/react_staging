/*该文件专门用于暴露一个store对象，整个应用只有一个store对象*/

//引入createStore，用于redux中最为核心的store对象
import { createStore,applyMiddleware } from "redux";

//引入redux-thunk，用于支持异步action
import thunk from "redux-thunk";

//引入redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension";

//引入汇总之后的reducer
import reducer from "./reducers/allReducers"

//暴露store
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

/*
react-redux开发者工具的使用
1. npm install redux-devtools-extension
2.store中进行配置
  import {composeWithDevTools} from "redux-devtools-extension"
  const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
*/
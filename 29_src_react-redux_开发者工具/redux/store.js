/*该文件专门用于暴露一个store对象，整个应用只有一个store对象*/

//引入createStore，用于redux中最为核心的store对象
import { createStore,applyMiddleware,combineReducers } from "redux";

//引入为count组件服务的reducer
import countReducer from "./reducers/count_reducer"

//引入为person组件服务的reducer
import personReducer from "./reducers/person_reducer"

//引入redux-thunk，用于支持异步action
import thunk from "redux-thunk";

//引入redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension";

//汇总所有reducer变为总的reducer
const allReducer = combineReducers({
    he:countReducer,
    rens:personReducer
})


//暴露store
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))

/*
react-redux开发者工具的使用
1. npm install redux-devtools-extension
2.store中进行配置
  import {composeWithDevTools} from "redux-devtools-extension"
  const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
*/
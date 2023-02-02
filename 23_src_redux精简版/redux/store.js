/*该文件专门用于暴露一个store对象，整个应用只有一个store对象*/

import { createStore } from "redux";//引入createStore，用于redux中最为核心的store对象
import countReducer from "./count_reducer"//引入为count组件服务的reducer

//暴露store
export default createStore(countReducer)

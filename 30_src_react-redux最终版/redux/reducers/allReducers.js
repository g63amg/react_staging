/*该文件用于汇总手游的reducer为一个总的reducer */

//引入combineReducers,用于汇总多个reducer
import { combineReducers } from "redux";

//引入为count组件服务的reducer
import countReducer from "./count_reducer"

//引入为person组件服务的reducer
import personReducer from "./person_reducer"



export default combineReducers({
    count:countReducer,
    persons:personReducer
})
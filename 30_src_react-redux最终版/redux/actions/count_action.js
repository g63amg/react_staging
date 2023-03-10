/*
该文件专门为Count组件生成action对象
*/
import {INCREMENT,DECREMENT} from "../constant"
import store from "../store"


//所谓的同步action，就是指action的值为Object类型的一般对象
export const increment = (data)=>{
    return {type:INCREMENT,data:data}
}
export const decrement = (data)=>{
    return {type:DECREMENT,data:data}
}

//所谓的异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的
export const incrementAsync = (data,time)=>{
    return ()=>{
        setTimeout(()=>{
            store.dispatch(increment(data))
           // store.dispatch({type:INCREMENT,data:data})
        },time)
    }
}
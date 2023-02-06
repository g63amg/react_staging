import {ADD_PERSON} from "../constant"

//reducer负责初始化状态和加工状态的
//初始化人的列表
const initState = [{id:"001",name:"tom",age:18}]
export default function personReducer(preState=initState,action){
    const {type,data} = action
    switch (type){
        case ADD_PERSON:
            //preState.unshift(data)  此处不可以这样写，这样会导致preState被改写了，PersonReducer就不是纯函数了
            return [data,...preState]
        default:
            return preState
    }
}
/*
纯函数：
1.一类特别的函数：只要是同样的输入（实参），必定得到同样的输出（返回）
2.必须遵守以下一些约束
    a.不得改写参数数据
    b.不会产生任何副作用，例如网络请求，输入和输出设备
    c.不能调用Date.now()或者Math.random()等不纯的方法
3.redux的reducer函数必须是一个函数
*/
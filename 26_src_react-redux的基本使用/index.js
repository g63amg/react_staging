//引入react核心库
import React from "react"
//引入ReactDOM
import ReactDOM from "react-dom"

//引入App组件
import App from "./App" //.js可以省略
// import store from "./redux/store"

//检测redux中状态的改变，如果redux的状态发生了改变，那么重新渲染App组件
// store.subscribe(()=>{
    ReactDOM.render(<App/>,document.getElementById("root"))
// })




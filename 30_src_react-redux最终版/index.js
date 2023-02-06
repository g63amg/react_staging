//引入react核心库
import React from "react"
//引入ReactDOM
import ReactDOM from "react-dom"

//引入App组件
import App from "./App" //.js可以省略

import store from "./redux/store"
import { Provider } from "react-redux"

ReactDOM.render(
    //此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)




//引入react核心库
import React from "react"
//引入ReactDOM
import ReactDOM from "react-dom"

//引入App组件
import App from "./App" //.js可以省略

import store from "./redux/store"
import { Provider } from "react-redux"

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)




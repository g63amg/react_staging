import React,{Component} from "react";
import Count from "./components/Count/Count";

export default class App extends Component {
  render() {
    return (
      <div>
        <Count/>
      </div>
    )
  }
}
/*
src下建立redux，redux下新建store.js，count_reducer.js

store.js：
引入redux中的createStore函数，创建一个store
createStore调用时要传入一个为其服务的reducer
记得暴露store对象

count_reducer.js:
reducer的本质是一个函数，接收：preState，action，返回加工后的状态
reducer有两个作用：初始化状态，加工状态
reducer被第一次调用时，是store自动触发的，传递的preState是undefined

在index.js中检测store中状态的改变，一旦发生改变重新渲染<App/>
备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠自己写
*/
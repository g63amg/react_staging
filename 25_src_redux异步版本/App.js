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
异步action：
1.明确：延迟的动作不想交给组件自身，想交给action
2.何时需要异步action：想要对状态进行操作，但具体的数据靠异步任务返回
3.具体编码：
  a.npm install redux-thunk，并配置在store中
  b.创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务
  c.异步任务有结果后，分发一个同步的action去真正操作数据
4.备注：异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action
*/
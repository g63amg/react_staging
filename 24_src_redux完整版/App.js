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
redux完整版
新增文件：
1.count_action 专门用于创建action对象
2.constant.js 防止容易写错的type值
 */
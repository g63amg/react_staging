import React,{Component} from "react";
//引入connect用于连接UI组件与redux
import {connect} from "react-redux"
//引入action
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../../redux/count_action"

//定义UI组件
class Count extends Component {
    state = {}
  
    render() {
      return (
        <div>
          <h1>当前求和为：{this.props.count}</h1>
          <select ref={c => this.selectNumber = c}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select>
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
          <button onClick={this.incrementAsync}>异步加</button>
        </div>
      )
    }
    increment = ()=>{
      const {value} = this.selectNumber
      this.props.jia(value*1)
    }
    decrement = ()=>{
      const {value} = this.selectNumber
      this.props.jian(value*1)
    }
    incrementIfOdd = ()=>{
      const {value} = this.selectNumber
      if(this.props.count%2 !== 0){
        this.props.jia(value*1)
      }
    }
    incrementAsync = ()=>{
      const {value} = this.selectNumber
      this.props.asyn(value*1,500)
    }
  }

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
    (state)=>{return {count:state}},//街道redux里边保存的state，人家能帮你掉这个状态
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        asyn:createIncrementAsyncAction
    }
)(Count)

/*
mapDispatchToProps也可以是一个对象
*/

/*
求和案例react-redux优化
1.容器组件和UI组件整合成一个文件
2.无需自己给容器组件传递store，给<App/>包一个<Provider></Provider>即可
3.使用了react-redux后也不用再自己检测redux中状态的改变了，容器组件可以自动完成这个工作
4..mapDispatchToProps也可以简单的写成一个对象
5.一个组件要和redux打交道，要经过几步？
  a.定义好一个UI组件--不暴露
  b.引入connect生成一个容器组件，并暴露
  c.在UI组件中通过this.props.xxx读取和操作状态
*/

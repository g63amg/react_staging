import React,{Component} from "react";
//引入connect用于连接UI组件与redux
import {connect} from "react-redux"
//引入action
import {increment,decrement,incrementAsync} from "../../redux/actions/count_action"

//定义UI组件
class Count extends Component {
    state = {}
  
    render() {
      return (
        <div>
          <h2>我是Count组件,下边组件总人数为：{this.props.renshu}</h2>
          <h3>当前求和为：{this.props.count}</h3>
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
      this.props.increment(value*1)
    }
    decrement = ()=>{
      const {value} = this.selectNumber
      this.props.decrement(value*1)
    }
    incrementIfOdd = ()=>{
      const {value} = this.selectNumber
      if(this.props.count%2 !== 0){
        this.props.increment(value*1)
      }
    }
    incrementAsync = ()=>{
      const {value} = this.selectNumber
      this.props.incrementAsync(value*1,500)
    }
  }

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
    (state)=>{return {count:state.count,personCount:state.persons.length}},
    {
      increment:increment,
      decrement:decrement,
      incrementAsync:incrementAsync
    }
)(Count)

/*
mapDispatchToProps也可以是一个对象
*/



import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person_action'

class Person extends Component {
  render() {
    return (
      <div>
        <h2>我是Person组件,上方组件求和为：{this.props.he}</h2>
        <input ref={c =>this.nameNode = c} type="text" placeholder="输入名字" />
        <input ref={c =>this.ageNode = c} type="text" placeholder="输入年龄" />
        <button onClick={this.addPerson}>添加</button>
        <ul>
            {
                this.props.yiduiren.map((p)=>{
                    return <li key={p.id}>{p.name}--{p.age}</li>
                })
            }
        </ul>
      </div>
    )
  }
  addPerson = ()=>{
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = {id:nanoid(),name,age}
    this.props.jiayiren(personObj)
    this.nameNode.value = ""
    this.ageNode.value = ""
  }
}

export default connect(
    (state)=>{return {yiduiren:state.rens,he:state.he}},
    {jiayiren:createAddPersonAction}
)(Person)

/*
1.定义一个Person组件，和Count组件通过redux共享数据
2.为Person组件编写：reducer、action，配置const常量
3.重点：Person的reducer和Count的Reducer要使用combineReducers进行合并，合并后的总状态是一个对象
4.交给stroe的是总reducer,最后注意在组件中取出状态的时候，记得“取到位”
*/
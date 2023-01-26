import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
      </div>
    )
  }
  getStudentData= ()=>{
    axios.get("http://localhost:3000/api1/students").then(
      response => {
        console.log("成功了",response.data) //服务器返回的数据放在response.data里了
      },
      error => {
        console.log("失败了",response)
      }
    )
  }
}

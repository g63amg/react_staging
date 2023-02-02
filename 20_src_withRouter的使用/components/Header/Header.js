import React, { Component } from 'react'
import {withRouter} from "react-router-dom"

class Header extends Component {
  back = ()=>{
    this.props.history.goBack()
  }
  forward = ()=>{
    this.props.history.goForward()
  }
  go = ()=>{
    this.props.history.go()
  }
  render() {
    return (
        <div className="page-header">
            <h2>React Router Demo</h2>
            <button  onClick={this.back}>回退</button>
            <button  onClick={this.back}>前进</button>
            <button  onClick={this.go}>go</button>
        </div>
        
    )
  }
}

export default withRouter(Header)

/*
widthRouter是用来解决在一般组件里使用路由组件API的
widthRouter的返回值是一个新组件
*/
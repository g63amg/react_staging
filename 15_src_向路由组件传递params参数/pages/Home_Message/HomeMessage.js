import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'
import HomeMessageDetail from '../Home_Message_Detail/HomeMessageDetail'

export default class HomeMessage extends Component {
  state = {
    messageArr:[
      {id:"01",title:"消息1"},
      {id:"02",title:"消息2"},
      {id:"03",title:"消息3"}
    ]
  }
  render() {
    const {messageArr} = this.state
    return (
        <div>
          <ul>
            {
              messageArr.map((msgObj)=>{
                return(
                  <li key={msgObj.id}>
                    {/* 向路由组件传递params参数，，模版字符串里要写js表达式要加$ */}
                    <Link to={`/home/homemessage/homemessagedetail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                  </li>
                )
              })
            }
          </ul>
          <hr/>
          <Route path="/home/homemessage/homemessagedetail/:id/:title" component={HomeMessageDetail}/>
        </div>
    )
  }
  /*
  1.params参数
    路由链接（携带参数）<Link to={`/home/homemessage/homemessagedetail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
    注册路由（声明接收）<Route path="/home/homemessage/homemessagedetail/:id/:title" component={HomeMessageDetail}/>
    接收参数：const{id,title} = this.props.match.params
  */
}

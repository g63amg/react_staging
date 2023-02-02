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
                    {/* <Link to={`/home/homemessage/homemessagedetail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                    {/*向路由组件传递search参数  */}
                    {/* <Link to={`/home/homemessage/homemessagedetail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                    {/* 向路由组件传递state参数 */}
                    <Link to={{pathname:"/home/homemessage/homemessagedetail",state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
                  </li>
                )
              })
            }
          </ul>
          <hr/>
          {/* 声明接收params参数 */}
          {/* <Route path="/home/homemessage/homemessagedetail/:id/:title" component={HomeMessageDetail}/> */}

          {/* search参数无需声明接收，正常注册路由即可 */}
          {/* <Route path="/home/homemessage/homemessagedetail" component={HomeMessageDetail}/> */}

          {/* state参数无需声明接收，正常注册路由即可 */}
          <Route path="/home/homemessage/homemessagedetail" component={HomeMessageDetail}/>

        </div>
    )
  }
  /*
  1.params参数
    a.路由链接（携带参数）<Link to={`/home/homemessage/homemessagedetail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
    b.注册路由（声明接收）<Route path="/home/homemessage/homemessagedetail/:id/:title" component={HomeMessageDetail}/>
    c.接收参数：const{id,title} = this.props.match.params

  2.search参数
    a.路由链接（携带参数）<Link to={`/home/homemessage/homemessagedetail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
    b.注册路由（无需声明，正常注册即可）<Route path="/home/homemessage/homemessagedetail" component={HomeMessageDetail}/>
    c.接受参数const {search} = this.props.location，备注：获取到的search是urlencoded编码字符串，需要借助querystring解析（import qs from "querystring"）

  3.state参数
    a.路由链接（携带参数）<Link to={{pathname:"/home/homemessage/homemessagedetail",state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
    b.注册路由（无需声明，正常注册即可）<Route path="/home/homemessage/homemessagedetail" component={HomeMessageDetail}/>
    c.接受参数const {id,title} = this.props.location.state || {}
    备注：刷新也可以保留住参数
  */
}

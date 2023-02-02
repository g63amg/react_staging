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
          <Route replace={true} path="/home/homemessage/homemessagedetail" component={HomeMessageDetail}/>

        </div>
    )
  }
/*
路由的两种模式：push，replace
push模式是默认的，比如按顺序点击About--Home--News--Message--消息1，回退的时候逐级回退
replace模式，比如<Route replace={true} path="/home/homemessage/homemessagedetail" component={HomeMessageDetail}/>在会退的时候About--Home--News直接到News
*/
}

import React, { Component } from 'react'
import { Route,Switch,Redirect } from 'react-router-dom'
import HomeNews from '../Home_News/HomeNews'
import HomeMessage from '../Home_Message/HomeMessage'
import MyNavLink from '../../components/MyNavLink/MyNavLink'


export default class Home extends Component {
  render() {
    return (
      <div>
          <h3>我是Home的内容</h3>
          <ul className="nav nav-tabs">
              <li>
                  <MyNavLink to="/home/homenews">News</MyNavLink>
              </li>
              <li>
                  <MyNavLink to="/home/homemessage">Message</MyNavLink>
              </li>
          </ul>
          {/* 注册路由 */}
          <Switch>
            <Route path="/home/homenews" component={HomeNews}/>
            <Route path="/home/homemessage" component={HomeMessage}/>
            <Redirect to="/home/homenews"/>
          </Switch>
      </div>
    )
  }
  /*
  嵌套路由：
  1.注册子路由的时候要写上父路由的path值
  2.路由的匹配是按照注册路由的顺序进行的
  */
}

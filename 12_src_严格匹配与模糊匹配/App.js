import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home/Home' //Home是路由组件
import About from './pages/About/About'//About是路由组件
import Header from './components/Header/Header' //Header是一般组件
import MyNavLink from './components/MyNavLink/MyNavLink'


export default class App extends Component {
  
render() {
    return (
        <div>
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <Header/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
						{/* 原生html中，靠<a></a>跳转不同的页面 */}
                        {/* <a href="./about.html" class="list-group-item">About</a>
                        <a href="./home.html" class="list-group-item active">Home</a> */}

						{/* 在React中靠路由链接实现切换组件 --编写路由链接*/}
						<MyNavLink to="/atguigu/about">About</MyNavLink>
						<MyNavLink to="/atguigu/home/a">Home</MyNavLink>
                        {/* activeClassName="active"如果要加的高亮的class名是active，这句就可以不写了，要加高亮的class名是其他的名字，写成activeClassName="active"*/}
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
							{/* 注册路由,注册路由的时候用Switch包一下，这样不会匹配到重复的路由,注意一个以上的路由再包Switch */}
                            <Switch>
                                <Route exact={true} path="/atguigu/about" component={About}/>
                                <Route exact={true} path="/atguigu/home" component={Home}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
/*
路由的严格匹配和摸不匹配
1.默认开启的是模糊匹配（输入的路径必须包含匹配的路径，且顺序一直）
2.开启严格匹配<Route exact={true} path="/atguigu/home" component={Home}/>
3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由
*/
}

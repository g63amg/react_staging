import React, { Component } from 'react'
import {NavLink,Route} from 'react-router-dom'
import Home from './pages/Home/Home' //Home是路由组件
import About from './pages/About/About'//About是路由组件
import Header from './components/Header/Header' //Header是一般组件


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
						<NavLink activeClassName="active" className="list-group-item" to="/about">About</NavLink>
						<NavLink activeClassName="active" className="list-group-item" to="/home">Home</NavLink>
                        {/* activeClassName="active"如果要加的高亮的class名是active，这句就可以不写了，要加高亮的class名是其他的名字，写成activeClassName="active"*/}
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
							{/* 注册路由 */}
							<Route path="/about" component={About}/>
							<Route path="/home" component={Home}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
/*
路由的基本使用：
1.明确好界面中的导航区、展示区
2.导航区的a标签改为Link标签，<Link to="/xxx">xxx</Link>
3.展示区写Route标签进行路径的匹配<Route path="/xxx" component={xxx}/>
4.App的最外层包裹一个<BrowserRouter></BrowserRouter>或<HashRouter></HashRouter>，用于管理整个应用的路由

路由组件与一般组件：
1.写法不同：
一般组件：<Demo/>
路由组件<Route path="/demo" component={Demo}/>

2.存放位置不同：
一般组件：components
路由组件：pages

3.接收到的props不同：
一般组件：写组件标签时传递了什么，就能收到什么
路由组件：接收到三个固定属性：
history:
    go:f go(n)
    goBack: f goBack()
    goForward: f goForward()
    push: f push(path,state)
    replace: f replace(path,state)
location:
    pathname: "/about"
    search: ""
    state: undefined
match:
    params:{}
    path:"/about"
    url:"/about"
*/
}

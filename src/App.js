import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
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
						<MyNavLink to="/about">About</MyNavLink>
						<MyNavLink to="/home">Home</MyNavLink>
                        {/* activeClassName="active"如果要加的高亮的class名是active，这句就可以不写了，要加高亮的class名是其他的名字，写成activeClassName="active"*/}
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
							{/* 注册路由,注册路由的时候用Switch包一下，这样不会匹配到重复的路由,注意一个以上的路由再包Switch */}
                            <Switch>
                                <Route path="/about" component={About}/>
                                <Route path="/home" component={Home}/>
                                <Redirect to="/about" />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
/*
Redirect的使用
1.一般卸载所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
<Switch>
    <Route path="/about" component={About}/>
    <Route path="/home" component={Home}/>
    <Redirect to="/about" />
</Switch>
*/
}

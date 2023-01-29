import React, { Component } from 'react'
import {Link,BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'


export default class App extends Component {
  
render() {
    return (
        <div>
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header">
                        <h2>React Router Demo</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
						{/* 原生html中，靠<a></a>跳转不同的页面 */}
                        {/* <a href="./about.html" class="list-group-item">About</a>
                        <a href="./home.html" class="list-group-item active">Home</a> */}

						{/* 在React中靠路由链接实现切换组件 --编写路由链接*/}
						<Link className="list-group-item" to="/about">About</Link>
						<Link className="list-group-item" to="/home">Home</Link>
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

}

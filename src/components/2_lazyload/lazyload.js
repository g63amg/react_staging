import React, { Component,lazy,Suspense } from 'react'
import {NavLink,Route} from 'react-router-dom'
// import Home from './About/About'
// import About from './Home/Home'

const Home = lazy(() => {return import('./Home/Home')} )
const About = lazy(() => {return import('./About/About')} )

// const About = lazy(()=>{import("./About/About")})

export default class Demo extends Component {
  
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
						{/* 在React中靠路由链接实现切换组件 --编写路由链接*/}
						<NavLink className="list-group-item" to="/about">About</NavLink>
						<NavLink className="list-group-item" to="/home">Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
							{/* 注册路由 */}
                            <Suspense fallback={<h1>Loading...</h1>}>
                                <Route path="/about" component={About}/>
                                <Route path="/home" component={Home}/>
                            </Suspense>
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
4.App的最外层包裹一个<BrowserRouter></BrowserRouter>或<HashRouter></HashRouter>

*/
}

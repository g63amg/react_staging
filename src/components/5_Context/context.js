import React, { Component } from 'react'
import "./context.css"

//创建context对象
const UserNameContext = React.createContext()
const {Provider,Consumer} = UserNameContext

export default class A extends Component {
    state = {username: "lucy"}
    render() {
            const {username} = this.state
            return (
            <div className="parent">
                <h3>我是A组件</h3>
                <h4>我的用户名是：{username}</h4>
                {/* value={username}里边可以写成对象 */}
                <Provider value={username}>
                    <B/>
                </Provider>
            </div>
            
        )
    }
}
class B extends Component {
    render() {
        return (
            <div className="child">
                <h3>我是B组件</h3>
                {/* <h4>我从A接收到的用户名是：{this.props.username}</h4> */}
                <C/>
            </div>
        )
    }
}

// class C extends Component {
//     //声明接收context
//     static contextType = UserNameContext
//     render() {
//         return (
//             <div className="grand">
//                 <h3>我是C组件</h3>
//                 <h4>我从A接收到的用户名是：{this.context}</h4>
//                 {/* //如果接收回来的是对象，要写成this.context.name这样 */}
//             </div>
//         )
//     }
// }
function C(){
    return (
        <div className="grand">
            <h3>我是C组件</h3>
            <h4>我从A接收到的用户名是：
            <Consumer>
                {
                    value => {
                        return `${value}`
                    }
                }
            </Consumer>
            </h4>
        </div>
    )
}
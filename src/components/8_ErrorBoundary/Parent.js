import React, { Component } from 'react'
import Child from "./Child"

export default class Parent extends Component {
    state = {
        hasError: "" //用于标识子组件是否产生错误
    }

    //当parent的子组件出现报错的时候，会触发getDerivedStateFromError调用，并携带错误信息
    //只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误，getDerivedStateFromError配合componentDidCatch一起用
    static getDerivedStateFromError(error){
        console.log('@@@',error)
    }
    componentDidCatch(){
        console.log("统计错误此处，反馈给服务器，用于通知编码人员进行bug的解决")
    }

    render() {
        return (
            <div>
                <h2>我是Parent组件</h2>
                {this.state.hasError?<h2>当前网络不稳定，请稍后再试</h2>:<Child />}
            </div>
        )
    }
}

import React, { PureComponent } from 'react'
import "./optimize.css"

export default class Parent extends PureComponent {
    state = {carName:"c63"}
    changeCar = ()=>{
        this.setState({carName:"rs6"})
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     // console.log(this.props,this.state)
    //     // console.log(nextProps,nextState)
    //     if(this.state.carName === nextState.carName) return false
    //     else return true
    // }
    render() {
        const {carName} = this.state
        return (
            <div className='parent'>
                <h3>我是Parent组件</h3>
                <span>我的车名字是：{carName}</span>
                <button onClick={this.changeCar}>点击换车</button>
                <Child carName={carName}/>
            </div>
        )
    }
}

class Child extends PureComponent {
    // shouldComponentUpdate(nextProps,nextState){
    //     // console.log(this.props,this.state)
    //     // console.log(nextProps,nextState)
    //     if(this.props.carName === nextProps.carName) return false
    //     else return true
    // }
    render() {
        return (
            <div className='child'>
                <h3>我是child组件</h3>
                <span>我接到的车是：{this.props.carName}</span>
            </div>
        )
    }
}

/*
1.只要执行setState，即便不改变状态数据，组件也会重新render()
2.只当前组件重新render()，就会自动重新render子组件，纵使子组件没有用到父组件任何数据==》效率低

只有当前组件的state或props数据发生改变时才重新render

原因Component中的shouldComponentUpdate()总是返回true


优化组件：
使用PureComponent，PureComponent重写了shouldComponentUpdate()，只有state或者props数据有变化才返回true
注意：只是进行state和props数据的浅比较，如果只是数据对象内部数据改变了，返回false，不要直接修改state数据，而是产生新数据
项目中一般使用PureComponent
*/
//创建外壳组件
import React,{Component} from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import List from "./components/List/List"
import Item from "./components/Item/Item"

import "./components/App.css"
//创建并暴露App组件
export default class App extends Component{
    //初始化状态
    state = {todos: [
        {id: "001",name: "吃饭",done: true},
        {id: "002",name: "下课",done: false},
        {id: "003",name: "睡觉",done: true},
        {id: "004",name: "逛街",done: true},
    ]}
    render(){
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos}/>
                    <Footer/>
                </div>
            </div>
        )
    }
    //addTodo用于添加一个todo，接收的参数是todo对象
    addTodo = (todoObj)=>{
        //获取原todos
        const{todos} = this.state
        //追加一个todo
        const newTodos = [todoObj,...todos]
        //更新状态
        this.setState({todos:newTodos})
    }
}

//暴露App组件
//export default App
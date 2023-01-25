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
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
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
    //updateTo用于更新一个对象
    updateTodo = (id,done)=>{
        //获取状态中的todos
        const {todos} = this.state
        //匹配处理数据
        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id === id) return{...todoObj,done:done}
            else return todoObj
        })
        this.setState({todos:newTodos})
    }
    //deleteTodo用于删除一个对象
    deleteTodo = (id)=>{
        //获取原来的todos
        const{todos} = this.state
        //删除指定id的todo对象
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id        
        })
        //更新状态
        this.setState({todos:newTodos})
    }
    //checkAllTodo用于全选
    checkAllTodo = (done)=>{
        //获取原来的todos
        const{todos} = this.state
        //加工数据
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done:done}
        })
        //更新状态
        this.setState({todos:newTodos})
    }
    //clearAllDone清除所有已完成的
    clearAllDone = ()=>{
        const{todos} = this.state
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.done === false        
        })
        this.setState({todos:newTodos})
    }
}

//暴露App组件
//export default App
import React, { Component } from 'react'
import "./Item.css"

export default class Item extends Component {
    state = {mouse:false}
    handleMouse = (flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }
  render() {
    const{id,name,done} = this.props
    const{mouse} = this.state
    return (
        <li style={{background: mouse?"#ddd":"#fff"}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
            <label>
                <input type="checkbox" defaultChecked={done}/>
                <span>{name}</span>
            </label>
            <button className="btn btn-danger" style={{display: mouse?"block":"none"}}>删除</button>
        </li>
    )
  }
}

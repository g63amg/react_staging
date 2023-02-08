import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        // users:[
        //     {id:"001",name:"lucy",age:18},
        //     {id:"002",name:"jasmine",age:19},
        //     {id:"003 ",name:"lily",age:20}
        // ]
        users:"111"
    }
  render() {
    return (
      <div>
        <h2>我是Child组件</h2>
        {
            this.state.users.map((userObj)=>{
                return <h4 key={userObj.id}>{userObj.name}--{userObj.age}</h4>
            })
        }
      </div>
    )
  }
}

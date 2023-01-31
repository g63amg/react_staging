import React, { Component } from 'react'
import qs from "querystring"


const DetailData= [
    {id:"01",content:"你好，春天"},
    {id:"02",content:"你好，夏天"},
    {id:"03",content:"你好，秋天"}
]
export default class HomeMessageDetail extends Component {
    render() {
        //接收params参数
        //const {id,title} = this.props.match.params

        //接收search参数
        const {search} = this.props.location
        const {id,title} = qs.parse(search.slice(1))

        const findResult = DetailData.find((detailObj)=>{
        return detailObj.id === id
    })
        return (
            <ul>
                <li>ID{id}</li>
                <li>TITLE{title}</li>
                <li>CONTENT{findResult.content}</li>
            </ul>
        )
    }
}


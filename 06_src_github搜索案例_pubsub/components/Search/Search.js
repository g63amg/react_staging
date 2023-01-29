import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from "axios"

export default class Search extends Component {
  render() {
    return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">搜索github用户</h3>
            <div>
                <input ref={(c)=>{this.keyWordElement = c}} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                <button onClick={this.search}>搜索</button>
            </div>
        </section>
    )
  }
  search = ()=>{
    //获取用户的输入（连续解构赋值）,拿出的值还可以重命名：const {keyWordElement:{value:keyWord}}
    const {keyWordElement:{value:keyWord}} = this

    //发送请求前通知List更新状态
    PubSub.publish("atguigu",{isFirst:false,isLoading:true})

    //https://api.github.com/search/user?q=xxxxx
    //发送网络请求,之所以没有产生跨域，因为GitHub后端用了cors解决跨域(很少有)
    axios.get(`https://api.github.com/search/user?q=${keyWord}`).then(
      (response)=>{
        //请求成功后通知List更新状态
        PubSub.publish("atguigu",{isLoading:false,users:response.data.items})
      },
      (error)=>{
        //请求失败后通知List更新状态
        PubSub.publish("atguigu",{isLoading:false,err:error.message})
      }
    )
  }
}

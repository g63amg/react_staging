import React, { Component } from 'react'
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
    //获取用户的输入（连续解构赋值）,拿出的值还可以重命名const {keyWordElement:{value:keyWord}}
    const {keyWordElement:{value:keyWord}} = this

    //发送请求前通知App更新状态
    this.props.updateAppState({isFirst:false,isLoading:true})

    //https://api.github.com/search/user?q=xxxxx
    //发送网络请求,之所以没有产生跨域，因为GitHub后端用了cors解决跨域(很少有)
    axios.get(`https://api.github.com/search/user?q=${keyWord}`).then(
      (response)=>{
        this.props.updateAppState({isLoading:false,users:response.data.items})
      },
      (error)=>{
        //请求失败后通知App更新状态
        this.props.updateAppState({isLoading:false,err:error.message})
      }
    )
  }
}

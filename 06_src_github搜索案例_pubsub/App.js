import React, { Component } from 'react'
import Search from './components/Search/Search'
import List from './components/List/List'
import "./App.css"


export default class App extends Component {
  
  render() {
    return (
      <div className="container">
          <Search/>
          <List/>
      </div>
    )
  }

}

import './App.css';

import React, { Component } from 'react'
import Navbar from './components/navbar';
import News from './components/news';

export default class App extends Component {
  c='gullo'
  render() {
    return (
      <div>
      <Navbar/>
      <News pageSize="5"/>
        
        <h1>Ye ma ho wajahat {this.c}</h1>
      </div>
    )
  }
}

import './App.css';

import React, { Component } from 'react'
import Navbar from './components/navbar';
import News from './components/news';
import AppRouter from './config/router';

export default class App extends Component {
  c='gullo'
  render() {
    return (
      <div>
      
      <AppRouter />
      {/* <News pagesSize="5" category="science" country="in"/> */}
        
        <h1>Ye ma ho wajahat {this.c}</h1>
      </div>
    )
  }
}

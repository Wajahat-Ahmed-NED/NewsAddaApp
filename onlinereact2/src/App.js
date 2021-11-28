import './App.css';

import React, { Component } from 'react'
import AppRouter from './config/router';


export default class App extends Component {
  c='gullo'
  render() {
    return (
      <div>
      
      <AppRouter />
      {/* <News pagesSize="5" category="science" country="in"/> */}
        
  
      </div>
    )
  }
}

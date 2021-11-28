import './App.css';

import React, { Component } from 'react'
import Navbar from './components/navbar';
import News from './components/news';
import AppRouter from './config/router';
import Footer from './components/footer';

export default class App extends Component {
  c='gullo'
  render() {
    return (
      <div>
      
      <AppRouter />
      {/* <News pagesSize="5" category="science" country="in"/> */}
        
  
        <Footer />
      </div>
    )
  }
}

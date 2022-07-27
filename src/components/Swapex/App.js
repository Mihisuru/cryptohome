import React, { Component } from 'react'
import './App.css'
import Navbar from './Navbar'
import Content from './Content'




class App extends Component {
  

  render() {
    return (
      <div>
        <Navbar />
      <Content /> : <div className="content"></div> 
      </div>
    );
  }
}



export default App

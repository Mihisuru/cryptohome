import React, { Component } from 'react'


import Trades from './Trades'
import MyTransactions from './MyTransactions'

import './Content.css'

class Content extends Component {
  

  render() {
    return (
      <div className="content">
        <div className="vertical-split">
         
      
        </div>
      
        <div className="vertical-split">
         
          <MyTransactions />
        </div>
        <Trades />
      </div>
    )
  }
}



export default Content

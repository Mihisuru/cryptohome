import React, { Component } from 'react'

import Spinner from './Spinner'


class Trades extends Component {
  render() {
    return (
      <div className="vertical">
        <div className="card bg-dark text-white">
          <div className="card-header">
            Trades
          </div>
          <div className="card-body">
            <table className="table table-dark table-sm small">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>SWAP</th>
                  <th>SWAP/ETH</th>
                </tr>
              </thead>
              <Spinner type="table" />
            </table>
          </div>
        </div>
      </div>
    )
  }
}


export default Trades

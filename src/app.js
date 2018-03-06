'use strict'
import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Marcus'
    }
  }
  render () {
    return (
      <div className='container' onClick={() => this.setState({
        name: 'Outro nome'
      })}>
        {this.state.name}
      </div>
    )
  }
}

export default App

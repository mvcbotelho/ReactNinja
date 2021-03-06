'use strict'
import React, { Component } from 'react'
import Button from './button'
import Square from './square'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      color: 'green'
    }
  }
  render () {
    return (
      <div>
        <Square color={this.state.color} />
        {['red', 'green', 'blue', 'yellow'].map(color => (
          <Button
            key={color}
            handleClick={() => this.setState({ color })}>
            {color}
          </Button>
        ))
        }
      </div>
    )
  }
}

export default App

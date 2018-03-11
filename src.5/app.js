'use strict'
import React, { Component } from 'react'
import Timer from './timer'

class App extends Component {
  constructor (props) {
    console.log('constructor')
    super(props)
    this.state = {
      time: 0,
      showTimer: true
    }
  }

  componentWillMount () {
    console.log('componentWillMount - APP')
  }

  componentDidMount () {
    console.log('componentDidMount - APP')
  }

  render () {
    console.log('render - APP')
    return (
      <div>
        <Timer time={this.state.time} />
        <button
          onClick={() => this.setState({ time: this.state.time + 10 })}>
          Change Props
        </button>
      </div>
    )
  }
}

export default App

'use strict'
import React, { Component } from 'react'
import Title from './title'
import Square from './square'

class App extends Component {
  render () {
    return (
      <div>
        <Title />
        <Title name='Marcus' />
        <Title lastName='Carvalho' />
        <Title name='Marcus' lastName='Carvalho' />
        {['blue', 'green', 'yellow', 'blue'].map((square, index) => (
          <Square key={index} color={square} />
        ))}
      </div>
    )
  }
}

export default App

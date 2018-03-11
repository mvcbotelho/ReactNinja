import React, { Component } from 'react'
import Button from './button'

class App extends Component {
  render () {
    return (
      <div>
        <Button handleClick={() => alert('clicou')}>Alerta</Button>
        <Button handleClick={() => console.log('clicou')}>Console</Button>
      </div>
    )
  }
}

export default App

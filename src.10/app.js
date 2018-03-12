import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: []
    }
  }
  render () {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            console.log('event', e)
          }}
          onChange={(e) => {
            console.log(e.target.name)
            console.log(e.target.value)
          }}>
          <input type='name' name='name' />
          <input type='email' name='email' />
          <button type='submit'>Enviar</button>
        </form>
      </div>

    )
  }
}

export default App

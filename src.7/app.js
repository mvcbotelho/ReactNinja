import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()

    this.state = {
      value: ''
    }
  }
  render () {
    return (
      <div>
        <form>
          <input
            type='text'
            value={this.state.value}
            onChange={(e) => {
              console.log(e.target.value)
              this.setState({
                value: e.target.value
              })
            }} />
          <div>{this.state.value}</div>
        </form>
      </div>

    )
  }
}

export default App

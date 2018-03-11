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
        <form>
          <select multiple value={[this.state.value]} onChange={(e) => {
            console.log(e.target.value)
            this.setState({
              value: e.target.value
            })
          }}>
            <option value='1'>select opt 01</option>
            <option value='2'>select opt 02</option>
            <option value='3'>select opt 03</option>
            <option value='4'>select opt 04</option>
            <option value='5'>select opt 05</option>
          </select>
        </form>
      </div>

    )
  }
}

export default App

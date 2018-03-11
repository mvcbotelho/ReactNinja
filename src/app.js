import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()

    this.state = {
      value: '',
      checked: false,
      checkedrd: false
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
          <label>
            <input
              type='checkbox'
              checked={this.state.checked}
              onChange={(e) => {
                console.log(e.target.checked)
                this.setState({
                  checked: e.target.checked
                })
              }} /> Clique aqui
          </label>
          <label>
            <input
              type='radio'
              name='rd'
              value='1'
              onChange={(e) => {
                console.log(e.target.checked)
                console.log(e.target.value)
                this.setState({
                  checkedrd: e.target.checkedrd
                })
              }} /> Clique aqui
              </label>
          <label>
            <input
              type='radio'
              name='rd'
              value='2'
              onChange={(e) => {
                console.log(e.target.checked)
                console.log(e.target.value)
                this.setState({
                  checkedrd: e.target.checkedrd
                })
              }} /> Clique aqui
          </label>
        </form>
      </div>

    )
  }
}

export default App

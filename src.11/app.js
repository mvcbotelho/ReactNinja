import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()

    this.state = {
      checked: false,
      showContent: false
    }
  }

  render () {
    return (
      <div>
        <label>
          <input
            type='checkbox'
            checked={this.state.checked}
            onChange={() => {
              this.setState({
                checked: !this.state.checked
              }, () => {
                this.setState({
                  showContent: this.state.checked
                })
              })
            }}
          /> Clique aqui!!!
        </label>
        {this.state.showContent && <div>Clicou errado otário!!!</div>}
      </div>
    )
  }
}

export default App

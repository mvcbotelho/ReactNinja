import React, { Component } from 'react'

class Timer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      time: 0
    }
    this.timer
  }

  componentWillReceiveProps (nextProps) { // Vai receber novas propriedades, pode receber o this.setState
    console.log('componentWillReceiveProps - TIMER', this.props, nextProps)
  }

  shouldComponentUpdate (nextProps, nextState) {
    // console.log('shouldComponentUpdate - TIMER', this.props, nextState)
    return this.props.time !== nextProps.time
  }

  componentWillUpdate (nextProps, nextState) { // não pode usar o this.setState aqui
    console.log('componentWillUpdate - TIMER', this.props, nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate - TIMER', this.props, prevProps)
  }


  componentDidMount () {
    console.log('componentDidMount - TIMER')
    this.timer = setInterval(() => this.setState({ time: this.state.time + 1 }), 1000)
  }

  componentWillUnmount () {
    console.log('componentWillUnmount - TIMER')
    clearInterval(this.timer)
  }

  render () {
    console.log('render - TIMER')
    return (
      <div>Timer: {this.state.time}</div>
    )
  }
}

export default Timer

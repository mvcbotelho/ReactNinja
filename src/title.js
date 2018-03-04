import React from 'react'

const Title = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Visitante',
      lastName: 'Desconhecido'
    }
  },
  render: function () {
    return (
      <div>
        <h1>Olá {this.props.name + ' ' + this.props.lastName}!!!</h1>
      </div>
    )
  }
})

export default Title

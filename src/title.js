import React from 'react'

const Title = (props) => (
  <p>Olá {`${props.name} ${props.lastName}`} !!!</p>
)

Title.defaultProps = {
  name: 'Visitante',
  lastName: 'Desconhecido'
}

export default Title

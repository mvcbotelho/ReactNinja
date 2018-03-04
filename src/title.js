import React from 'react'
import styled from 'styled-components'

const WrapperTitle = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`

const Title = (props) => (
  <WrapperTitle>Olá {`${props.name} ${props.lastName}`} !!!</WrapperTitle>
)

Title.defaultProps = {
  name: 'Visitante',
  lastName: 'Desconhecido'
}

export default Title

'use strict'
import React, { Component } from 'react'
import styled from 'styled-components'
import Title from './title'
import Square from './square'

const WrapperTitle = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`

class App extends Component {
  render() {
    return (
      <div>
        <WrapperTitle>
          <Title />
          <Title name='Marcus' />
          <Title lastName='Carvalho' />
          <Title name='Marcus' lastName='Carvalho' />
        </WrapperTitle>
        {['blue', 'green', 'yellow', 'blue'].map((square, index) => (
          <Square key={index} color={square} />
        ))}
      </div>
    )
  }
}

export default App

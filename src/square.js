import React from 'react'
import styled from 'styled-components'

const Square = ({ color }) => (
  <div style={{
    backgroundColor: color,
    height: '100px',
    width: '100px'
  }} />
)

Square.defaultProps = {
  color: 'black'
}

export default Square

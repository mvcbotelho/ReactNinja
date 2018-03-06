import React from 'react'

const Button = ({ children, handleClick }) => (
  <div>
    <button className='main-btn' onClick={handleClick}>{ children }</button>
  </div>
)

export default Button

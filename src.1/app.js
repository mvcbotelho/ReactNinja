'use strict'
import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Title />
        <Title name='Dev React' />
        <Title lastName ='Carvalho' />
        <Title name='Marcus' lastName='Carvalho' />
      </div>
    )
  }
})

export default App

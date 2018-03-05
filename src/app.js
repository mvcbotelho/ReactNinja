'use strict'
import React, { Component } from 'react'
import Button from './button'
import LikeButton from './likeButton'
import SearchButton from './searchButton'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <Button>
          <span>Outro</span> Botão
        </Button>
        <LikeButton />
        <SearchButton />
      </div>
    )
  }
}

export default App

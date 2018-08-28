import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <header className='header'>
        <h1 className='header-title'>Welcome to React</h1>
        <input type='text' />
        <button type='submit'>Submit</button>
      </header>
    )
  }
}

export default Header

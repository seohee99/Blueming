// Header.js
import React from 'react'
import { Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" style={{marginLeft:'100px'}}>
      <Navbar.Brand href="/">My App</Navbar.Brand>
    </Navbar>
  )
}

export default Header

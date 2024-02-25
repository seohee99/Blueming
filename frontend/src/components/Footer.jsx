// Footer.js
import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <Navbar fixed="bottom" bg="light"style={{marginLeft:'100px'}}>
      <Container>
        <Navbar.Text>&copy; 2024 My App</Navbar.Text>
      </Container>
    </Navbar>
  )
}

export default Footer

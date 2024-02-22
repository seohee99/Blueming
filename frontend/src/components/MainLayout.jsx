import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}

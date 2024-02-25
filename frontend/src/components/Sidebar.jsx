// Sidebar.js
import React from 'react'
import { Nav } from 'react-bootstrap'

const Sidebar = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column bg-blue" style={{ position: 'fixed', top: '0', bottom: '0', left: '0', width: '100px', overflow: 'auto' , backgroundColor:'blue'}}>
      <Nav.Link href="/board">게시판</Nav.Link>
      <Nav.Link href="/assignment">과제함</Nav.Link>
      <Nav.Link href="/notice">공지사항</Nav.Link>
      <Nav.Link href="/settings">설정</Nav.Link>
    </Nav>
  )
}

export default Sidebar

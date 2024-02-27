// Sidebar.js
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "/b-logo.png";
import ciLogo from "/ci-logo.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div style={{ position: "relative" }}>
      <Nav
        defaultActiveKey="/home"
        className="flex-column"
        style={{
          position: "fixed",
          top: "0",
          bottom: "0",
          left: "0",
          width: "200px",
          overflow: "auto",
          backgroundColor: "white",
          color: "black",
          // borderRight: '2px solid lightgray',
          boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.2)",
          zIndex: 1,
        }}
      >
        <Link to="/">
          <img src={logo} width="60" className="logo-img" alt="Blueming logo" />
        </Link>
        <Nav.Link
          href="/"
          className="nav-link"
          style={{ color: "#5D5D5D", fontWeight: "normal", fontSize: "19px" }}
        >
          메인화면
        </Nav.Link>
        <Nav.Link
          href="/board"
          className="nav-link"
          style={{ color: "#5D5D5D", fontWeight: "normal", fontSize: "19px" }}
        >
          게시판
        </Nav.Link>
        <Nav.Link
          href="/assignment"
          className="nav-link"
          style={{ color: "#5D5D5D", fontWeight: "normal", fontSize: "19px" }}
        >
          과제함
        </Nav.Link>
        <Nav.Link
          href="/notice"
          className="nav-link"
          style={{ color: "#5D5D5D", fontWeight: "normal", fontSize: "19px" }}
        >
          공지사항
        </Nav.Link>
        <Nav.Link
          href="/settings"
          className="nav-link"
          style={{ color: "#5D5D5D", fontWeight: "normal", fontSize: "19px" }}
        >
          설정
        </Nav.Link>
      </Nav>
      <img
        src={ciLogo}
        width="110"
        className="ci-logo-img"
        alt="Blueming logo"
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          marginBottom: "20px", // 필요에 따라 조절
          marginLeft: "40px", // 필요에 따라 조절
        }}
      />
    </div>
  );
};

export default Sidebar;

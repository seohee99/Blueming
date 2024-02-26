// Header.js
import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  const TEXT = "오늘도 화이팅!!";

  return (
    <Navbar
      fixed="top"
      style={{
        height: 80,
        marginLeft: "200px",
        boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Navbar.Collapse
        className="justify-content-end"
        style={{ gap: 20, marginRight: 10 }}
      >
        <Form className="mr-2">
          <FormControl
            type="text"
            placeholder={TEXT}
            className="mr-2"
            style={{ backgroundColor: "lightblue" }}
          />
        </Form>
        <Button variant="outline-info" className="mr-2">
          로그인
        </Button>
        <Button variant="outline-info" className="mr-2">
          <i className="bi bi-person-fill"></i>
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

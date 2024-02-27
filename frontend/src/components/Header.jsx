// Header.js
import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/reducers/user";
import { fetchLogout } from "../lib/apis/auth";
import socket from "../routes/socket/socket";
import { setMessage } from "../store/reducers/message";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useSelector((state) => state.message.message);
  console.log("aptpwl", message);

  const handleLogout = async () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      try {
        await fetchLogout();
        dispatch(logout());
        alert("로그아웃 되었습니다.");
        navigate("/users/login");
      } catch (error) {
        console.error("로그아웃 처리 중 오류가 발생했습니다:", error);
      }
    }
  };

  const handleWriteMessage = (newMessage) => {
    dispatch(setMessage(newMessage));
    socket.emit("setHeaderMessage", newMessage);
  };

  function onKeyUp(e) {
    if (e.key === "Enter") {
      handleWriteMessage(e.target.value);
    }
  }

  socket.on("setHeaderMessageBack", async (data) => {
    console.log("message2 :: ", data);
    dispatch(setMessage(data)); // Redux 상태 업데이트
  });

  return (
    <Navbar
      className="header-top"
      fixed="top"
      style={{
        height: 80,
        marginLeft: "200px",
        boxShadow: "0px 1px 1px 0px rgba(0, 0, 0.3, 0.2)",
        backgroundColor: "white",
      }}
    >
      <Navbar.Collapse
        className="justify-content-end"
        style={{ gap: 20, marginRight: 10 }}
      >
        <Form className="mr-2" onSubmit={(e) => e.preventDefault()}>
          <FormControl
            className="write-message"
            type="text"
            placeholder={message}
            onKeyUp={(e) => onKeyUp(e)}
            style={{ backgroundColor: "white", border: "2px solid #9CBEFF" }}
          />
        </Form>

        {user.isLoggedIn && user.userInfo ? (
          <>
            <Nav>{user.userInfo.name}님</Nav>
            <Nav.Link
              href="/users/mypage"
              className="text-center border border-info"
            >
              <i className="bi bi-person-fill"></i>
            </Nav.Link>
            <Nav.Link
              onClick={handleLogout}
              className="flex-grow text-center border border-info"
            >
              <i className="bi bi-door-open"></i>
            </Nav.Link>
          </>
        ) : (
          <Nav.Link
            href="/users/login"
            className="login-btn text-center border border-info border-end-0"
          >
            로그인
          </Nav.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

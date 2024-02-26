import React, { useCallback, useState } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import { fetchSignup } from "../../../lib/apis/auth";
import { redirect, useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const navigate = useNavigate();

  const onInputChange = useCallback((inputText, setFn) => {
    setFn(inputText);
  }, []);

  const onRegisterSubmit = useCallback(
    (email, password, name, phone, admin) => {
      fetchSignup({ email, password, name, phone, admin }).then((data) => {
        // console.log(data);
        navigate("/users/login");
      });
    },
    [navigate]
  );

  return (
    <Container className="min-vh-100  d-flex flex-column justify-content-center align-items-center">
      <div style={{ width: "100%", maxWidth: 640 }}>
        <h3 style={{ alignSelf: "start" }}> 환영합니다!</h3>
        Blueming은 어쩌고 저쩌고 어쩌고 저쩌고 하고 있습니다. <br></br>
        Blueming과 함께 더욱 발전하는 내일을 만드세요!
        <br></br>
        <br></br>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            onChange={(e) => {
              onInputChange(e.target.value, setUserEmail);
            }}
            type="email"
            placeholder="name@example.com"
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            onChange={(e) => {
              onInputChange(e.target.value, setUserPassword);
            }}
            type="password"
            placeholder="Password"
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingNickname"
          label="nickname"
          className="mb-3"
        >
          <Form.Control
            type="text"
            onChange={(e) => {
              onInputChange(e.target.value, setUserName);
            }}
            placeholder="이름을 입력하여 주세요."
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingNickname"
          label="phone"
          className="mb-3"
        >
          <Form.Control
            type="text"
            onChange={(e) => {
              onInputChange(e.target.value, setUserPhone);
            }}
            placeholder="전화번호를 입력하여 주세요."
            required
          />
        </FloatingLabel>
        <div>
          <br />
        </div>
        <Button
          className="w-100"
          onClick={(e) => {
            e.preventDefault();
            onRegisterSubmit(userEmail, userPassword, userName, userPhone);
          }}
        >
          회원가입
        </Button>
      </div>
    </Container>
  );
}

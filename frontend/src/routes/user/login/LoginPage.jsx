import React, { useCallback, useContext, useState } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import { redirect, useNavigate, Link } from "react-router-dom";
// import { fetchLogin } from "../../../lib/apis/auth";
import { fetchLogin } from "../../../store/reducers/user";
import { useDispatch, useSelector } from "react-redux";
import {socket} from '../../question/alarm';

export default function LoginPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onInputChange = useCallback((inputText, setFn) => {
    setFn(inputText);
  }, []);

  const onSubmitLogin = useCallback(
    (email, password) => {
      dispatch(fetchLogin({ email, password }))
        .then((resp) => {
          // console.log(resp);
          if (resp.payload.token) {
            //resp.token = user
            // delete resp.payload.token;


            socket.emit("login",email,(res) => {
              console.log("Socket-Res",res)
            })

            navigate("/");
          }
        })
        .catch((error) => {
          console.log("Login Error");
        });
    },
    [dispatch, navigate]
  );

  return (
    <Container className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div style={{ width: "100%", maxWidth: 640 }}>
        <h3 style={{ alignSelf: "start" }}> Be Blue, Be Bloom!</h3>
        <br />
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            onChange={(e) => {
              onInputChange(e.target.value, setUserEmail);
            }}
            value={userEmail}
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
            value={userPassword}
            type="password"
            placeholder="Password"
            required
          />
        </FloatingLabel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "8px",
            justifyItems: "end",
          }}
        >
          <Link to="/users/signup">
            <Button className="w-20 mb-2" style={{ flex: "1" }}>
              회원가입
            </Button>
          </Link>
          <Button
            className="w-100 mb-2"
            onClick={(e) => {
              e.preventDefault();
              onSubmitLogin(userEmail, userPassword);
            }}
          >
            로그인
          </Button>
        </div>
      </div>
    </Container>
  );
}

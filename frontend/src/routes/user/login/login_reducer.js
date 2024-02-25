import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import { fetchLogin } from "../../../store/reducers/user";

export default function LoginPage() {
  const dispatch = useDispatch();
  const userObj = useSelector((state) => state.user);
  const { isLoggedIn, loading, userInfo } = userObj;

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    //로그인 요청
    const action = fetchLogin({ email: userEmail, password: userPassword });
    dispatch(action);
  }, [dispatch]);

  // // 로딩 중인 경우에는 로딩 메시지를 표시합니다.
  // if (loading === "pending") {
  //   return <p>Loading...</p>;
  // }

  // // 로그인에 성공하고 로그인된 경우에는 환영 메시지를 표시합니다.
  // if (loading === "fulfilled" && isLoggedIn) {
  //   return <p>Welcome, {userInfo.username}!</p>;
  // }

  // // 로그인에 실패한 경우에는 실패 메시지를 표시합니다.
  // if (loading === "rejected") {
  //   return <p>Login failed.</p>;
  // }

  // 위의 경우가 아닌 경우에는 로그인 폼을 표시합니다.
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={userEmail}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={userPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );

  // 로그인 폼의 입력 값 변경 이벤트 핸들러
  function handleChange(event) {
    // const { id, value } = event.target;
    // setLoginData({ ...loginData, [id]: value });
  }

  // 로그인 폼 제출 이벤트 핸들러
  function handleSubmit(event) {
    // event.preventDefault(); // 폼의 기본 동작 방지
    // dispatch(fetchLogin(loginData)); // 로그인 요청 액션을 디스패치합니다.
  }
}

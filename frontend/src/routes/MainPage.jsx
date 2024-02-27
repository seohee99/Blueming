import React, { useState, useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CodeShare from "./codeShare/CodeShare";
import SetLink from "./codeShare/SetLink";
import Question from "./question/Question";
import "bootstrap/dist/css/bootstrap.min.css";
import point from "/point.png";
import "./MainPage.css";
import socket from "./socket/socket";

export default function MainPage() {
  const [codelink, setCodelink] = useState("");
  const [showCodeShare, setShowCodeShare] = useState(false);
  const [showLinkInput, setshowLinkInput] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [sid, setSid] = useState('');

  const dispatch = useDispatch();

  let userObj = useSelector((state) => {
    return state.user.userInfo;
  });


  useEffect(() => {
    socket.on('connect', () => {
      if (userObj) {
        let modifiedUserObj = { ...userObj, sid: socket.id };
        console.log(socket.id)
        socket.emit("setSid", modifiedUserObj);

        // 필요하다면, 수정된 userObj를 Redux store에 저장하는 코드를 추가할 수 있습니다.
        // dispatch(updateUserInfo(modifiedUserObj));
      }
    });
  }, [userObj]);


  // 새로고침할 때마다 socket id는 바뀌므로 useEffect 훅을 사용해서 user의 sid 값을 저장하도록 emit을 보냄
  // useEffect(() => {
  //   if (userObj) {
  //     const updatedUserObj = { ...userObj, sid: socket.id };
  //     setSid(socket.id); // socket.id로 sid 상태 업데이트
  //     console.log(sid)
  //     console.log(updatedUserObj.sid)
  //     if (updatedUserObj.sid) {
  //       socket.emit("setSid", updatedUserObj);
  //       console.log("emit 보냄")
  //     }
  //   }
  // }, [socket.id, userObj]); // socket.id를 의존성 배열에 추가

  const handleShowCodeShare = () => {
    // window.open(
    //   codelink,
    //   "_blank",
    //   "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"
    // );
    if (!codelink) {
      alert("화면 공유 링크를 먼저 삽입해주세요");
      return;
    }
    setShowCodeShare((showCodeShare) => !showCodeShare);
  };
  const handleShowLinkInput = () => {
    setshowLinkInput((showLinkInput) => !showLinkInput);
  };
  const handleShowQuestion = () => {
    setShowQuestion((showQuestion) => !showQuestion);
  };

  // 정보
  const CLASS = "프로 디지털 아카데미";

  // socket 연결 확인
  useEffect(() => {
    console.log(socket);
    // socket.on('connection', (io) => {
    //   console.log('SocketID::', io.id);

    // })
  })


  return (
    <div className="main-container">
      <div className="btn-group">
        <Button className="main-btn" onClick={handleShowQuestion}>
          🙋 질문하기
        </Button>
        {/* <Button>👀 질문보기</Button> */}
        <Button className="main-btn" onClick={handleShowLinkInput}>
          🔗 화면공유하기
        </Button>
        <Button className="main-btn" onClick={handleShowCodeShare}>
          🖥️ 화면공유 보기
        </Button>
      </div>

      <img className="point-img" src={point} width="75" alt="Blueming point" />
      <div className="week-board">
        {/* TODO */}
        <p>나의 수업: {CLASS}</p>
        <div className="week-card-container">
          <Card className="custom-card c1">
            <div className="circle"></div>
            <p className="week-text">MON</p>
            <p className="week-num">2/26</p>
            <p className="week-curriculum">
              클라우드 기반 프론트엔드 개발(React) 프로그래밍
            </p>
          </Card>
          <Card className="custom-card c2">
            <div className="circle"></div>
            <p className="week-text">TUE</p>
            <p className="week-num">2/27</p>
            <p className="week-curriculum">
              클라우드 기반 프론트엔드 개발(React) 프로그래밍
            </p>
          </Card>
          <Card className="custom-card c3">
            <div className="circle"></div>
            <p className="week-text">WED</p>
            <p className="week-num">2/28</p>
            <p className="week-curriculum">
              클라우드 기반 프론트엔드 개발(React) 프로그래밍
            </p>
          </Card>
          <Card className="custom-card c4">
            <div className="circle"></div>
            <p className="week-text">THU</p>
            <p className="week-num">2/29</p>
            <p className="week-curriculum">
              클라우드 기반 프론트엔드 개발(React) 프로그래밍
            </p>
          </Card>
          <Card className="custom-card c5">
            <div className="circle"></div>
            <p className="week-text">FRI</p>
            <p className="week-num red">3/1</p>
            <p className="week-curriculum">
              클라우드 기반 프론트엔드 개발(React) 프로그래밍
            </p>
          </Card>
        </div>
      </div>

      {showLinkInput && (
        <SetLink
          setCodelink={setCodelink}
          handleShowLinkInput={handleShowLinkInput}
        />
      )}
      {showQuestion && <Question handleShowQuestion={handleShowQuestion} />}
      {showCodeShare && <CodeShare link={codelink} />}
    </div>
  );
}

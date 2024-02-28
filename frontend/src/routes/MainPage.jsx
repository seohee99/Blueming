import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CodeShare from "./codeShare/CodeShare";
import SetLink from "./codeShare/SetLink";
import Question from "./question/Question";
import AlarmList from "./question/AlarmList";
import "bootstrap/dist/css/bootstrap.min.css";
import point from "/point.png";
import "./MainPage.css";
import socket from "./socket/socket";
import { setSid } from "./socket/socketEvents";
import data from "../assets/data/ curriculum.json";

export default function MainPage() {
  const [showCodeShare, setShowCodeShare] = useState(false);
  const [showLinkInput, setshowLinkInput] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showAlarmList, setShowAlarmList] = useState(false);
  const [weekIndex, setWeekIndex] = useState(false);

  let userObj = useSelector((state) => {
    return state.user.userInfo;
  });

  useEffect(() => {
    if (userObj) {
      setSid(userObj);
    }
  }, []);

  const handleShowCodeShare = () => {
    setShowCodeShare((showCodeShare) => !showCodeShare);
  };

  // 링크 공유 하기 버튼
  const handleShowLinkInput = () => {
    setshowLinkInput((showLinkInput) => !showLinkInput);
  };

  // 질문 보기 버튼
  const handleShowQuestion = () => {
    setShowQuestion((showQuestion) => !showQuestion);
  };

  // 질문 보기 버튼
  const handleShowAlarmList = () => {
    setShowAlarmList((showAlarmList) => !showAlarmList);
  };

  // 주별 데이터 가져오는 함수
  const getWeekData = (idx) => {
    const weekData = data.slice(idx * 5, (idx + 1) * 5);
    return weekData;
  };

  // 이전 주 이동 버튼
  const handlePrevWeek = () => {
    if (weekIndex > 0) {
      setWeekIndex(weekIndex - 1);
    }
  };

  // 다음 주 이동 버튼
  const handleNextWeek = () => {
    if (weekIndex < data.length / 5 - 1) {
      setWeekIndex(weekIndex + 1);
    }
  };

  // 정보
  const CLASS = "프로 디지털 아카데미";

  // socket 연결 확인
  useEffect(() => {
    console.log(socket);

    // socket.on('connection', (io) => {
    //   console.log('SocketID::', io.id);

    // })
  });

  return (
    <div className="main-container">
      {userObj && (
        <div className="btn-group">
          {userObj.admin === 1 ? (
            <Button className="main-btn" onClick={handleShowAlarmList}>
              👀 질문보기
            </Button>
          ) : (
            <Button className="main-btn " onClick={handleShowQuestion}>
              🙋 질문하기
            </Button>
          )}
          <Button className="main-btn" onClick={handleShowLinkInput}>
            🔗 화면공유하기
          </Button>
          <Button className="main-btn" onClick={handleShowCodeShare}>
            🖥️ 화면공유 보기
          </Button>
        </div>
      )}
      {showCodeShare && <CodeShare />}
      {showQuestion && <Question handleShowQuestion={handleShowQuestion} />}
      {showAlarmList && <AlarmList handleShowAlarmList={handleShowAlarmList} />}
      {showLinkInput && <SetLink handleShowLinkInput={handleShowLinkInput} />}

      <img className="point-img" src={point} width="75" alt="Blueming point" />
      <div className="week-board">
        <p>나의 수업: {CLASS}</p>
        <div className="week-card-container">
          {getWeekData(weekIndex).map((dayData, idx) => (
            <Card key={idx} className={`custom-card c${idx + 1}`}>
              <div className="circle"></div>
              <p className="week-text">{dayData.day}</p>
              <p className={`week-num ${dayData.holiday ? "holiday" : ""}`}>
                {dayData.date.substring(5).replace("-", "/")}
              </p>
              <p className="week-curriculum">{dayData.content}</p>
            </Card>
          ))}
        </div>
        <Button onClick={handlePrevWeek}>⇦</Button>
        <Button onClick={handleNextWeek}>⇨</Button>
      </div>
    </div>
  );
}

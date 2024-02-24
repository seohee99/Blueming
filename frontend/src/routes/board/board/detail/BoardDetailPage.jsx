import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function BoardDetailPage() {
  const [comment, setComment] = useState("");
  const boardDetailData = {
    title: "이거 푼 사람 도와주세요 ㅜㅜ",
    content: "생각보다 너무 어려운데요 ㅠㅠ",
    isAnonymous: 0,
    tag: ["잡담", "질문"],
    writer: "김투자",
    date: "2024.02.19",
  };

  const commentData = [
    {
      writer: "댓1",
      date: "2024.02.19",
      commentContent: "나도 어려워",
      isAnonymous: 1,
    },
    {
      writer: "댓2",
      date: "2024.02.19",
      commentContent: "ㅠㅠ 나도 모름",
      isAnonymous: 0,
    },
    {
      writer: "댓3",
      date: "2024.02.19",
      commentContent: "화이팅...",
      isAnonymous: 0,
    },
  ];
  return (
    <Container className="board-detail-page">
      <div className="board-detail-all">
        <div className="board-detail-tag-container">
          {boardDetailData.tag.map((boardDetailTag) => (
            <div className="board-detail-tag">{boardDetailTag}</div>
          ))}
        </div>
        <div className="board-detail-title">
          <h1>{boardDetailData.title}</h1>
        </div>

        <div className="board-writer-date-btns">
          <div className="board-writer-date">
            <strong>
              {boardDetailData.isAnonymous ? Anonymous : boardDetailData.writer}
            </strong>{" "}
            / {boardDetailData.date}
          </div>
          <div className="board-detail-btns">
            <button className="board-btn-edit" onClick={() => {}}>
              수정
            </button>
            <button className="board-btn-del" onClick={() => {}}>
              삭제
            </button>
          </div>
        </div>
        <div className="board-content">{boardDetailData.content}</div>
      </div>
      <hr className="line"></hr>
      <div className="board-comment-all">
        <div className="board-comment-num">
          <h5>{commentData.length}개의 댓글</h5>
        </div>
        <div className="board-comment-write">
          <Form.Control
            className="comment-write-form"
            placeholder="댓글을 작성하세요"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyUp={(e) => onKeyUp(e)}
          />
          <Button className="comment-write-btn" onClick={() => {}}>
            작성
          </Button>
        </div>

        <div className="board-comment-view">
          {commentData.map((data) => (
            <div className="board-comment-each">
              <div className="board-comment-writer">
                <strong>{data.isAnonymous ? "Anonymous" : data.writer}</strong>
              </div>
              <div className="board-comment-date">{data.date}</div>
              <div className="board-comment-content">{data.commentContent}</div>
              <hr className="line" />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

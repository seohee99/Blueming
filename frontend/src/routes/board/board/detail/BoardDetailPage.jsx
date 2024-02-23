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
      commentContent: "나도 어려워",
      isAnonymous: 1,
    },
  ];
  return (
    <Container className="board-detail-page">
      <div className="board-detail-all">
        <div className="board-detail-title-tag">
          <div className="board-detail-title">{boardDetailData.title}</div>
          {boardDetailData.tag.map((boardDetailTag) => (
            <div className="board-detail-tag">{boardDetailTag}</div>
          ))}

          <div className="board-writer-date">
            {boardDetailData.isAnonymous ? Anonymous : boardDetailData.writer} /
            {boardDetailData.date}
          </div>
          <div className="board-content">{boardDetailData.content}</div>
        </div>
        <Button className="edit-board-btn" onClick={() => {}}>
          수정
        </Button>
      </div>
      <hr className="line"></hr>
      <div className="board-comment-all">
        <div className="board=comment-num">{commentData.length}개의 댓글</div>
        <div className="board-comment-write">
          <Form.Control
            className="comment-write-form"
            placeholder="댓글을 작성하세요"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyUp={(e) => onKeyUp(e)}
          />
          <Button className="comment-write-btn" onClick={() => {}}>
            댓글 작성
          </Button>
        </div>

        <div className="board-comment-writer-date">
          <div className="board-comment-writer"></div>
          <div className="board-comment-date"></div>
        </div>
        <div className="board-comment"></div>
      </div>
    </Container>
  );
}

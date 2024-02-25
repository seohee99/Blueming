import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { fetchBoardDetail, fetchBoardCommentList } from "~/lib/apis/board";
import { useParams } from "react-router-dom";

export default function BoardDetailPage() {
  const [commentData, setCommentData] = useState([]);
  const [writeComment, setWriteComment] = useState("");
  const [boardData, setBoardData] = useState([]);
  const params = useParams();

  const callCommentData = async () => {
    try {
      const response = await fetchBoardCommentList(params.boardId);
      setCommentData(response.comments);
    } catch (error) {
      console.error("상세 페이지 댓글 데이터 호출 중 에러:", error);
    }
  };

  const callBoardData = async () => {
    try {
      const response = await fetchBoardDetail(params.boardId);
      setBoardData(response);
    } catch (error) {
      console.error("상세 페이지 보드 데이터 호출 중 에러:", error);
    }
  };

  function timeAgo(updatedAt) {
    const now = new Date();
    const updatedTime = new Date(updatedAt);

    const secondsPast = (now.getTime() - updatedTime.getTime()) / 1000;

    if (secondsPast < 60) {
      return parseInt(secondsPast) + "초 전";
    }
    if (secondsPast < 3600) {
      return parseInt(secondsPast / 60) + "분 전";
    }
    if (secondsPast <= 86400) {
      return parseInt(secondsPast / 3600) + "시간 전";
    }
    if (secondsPast > 86400) {
      let month = (updatedTime.getMonth() + 1).toString();
      let date = updatedTime.getDate().toString();
      let hours = updatedTime.getHours().toString();
      let minutes = updatedTime.getMinutes().toString();

      month = month.length < 2 ? "0" + month : month;
      date = date.length < 2 ? "0" + date : date;
      hours = hours.length < 2 ? "0" + hours : hours;
      minutes = minutes.length < 2 ? "0" + minutes : minutes;

      return `${month}/${date} ${hours}:${minutes}`;
    }
  }

  useEffect(() => {
    callBoardData();
    callCommentData();
  }, []);

  return (
    <Container className="board-detail-page">
      <div className="board-detail-all">
        <div className="board-detail-tag-container">
          {boardData.tag &&
            boardData.tag.map((boardDetailTag) => (
              <div className="board-detail-tag">{boardDetailTag}</div>
            ))}
        </div>
        <div className="board-detail-title">
          <h1>{boardData.boardTitle}</h1>
        </div>

        <div className="board-writer-date-btns">
          <div className="board-writer-date">
            <strong>{boardData.isAnonymous ? "익명" : boardData.writer}</strong>{" "}
            / {timeAgo(boardData.updatedAt)}{" "}
            {boardData.updatedAt !== boardData.createdAt ? "(수정)" : null}
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
        <div className="board-content">{boardData.boardContent}</div>
      </div>
      <hr className="line"></hr>
      <div className="board-comment-all">
        <div className="board-comment-num">
          <h5>
            {commentData.filter((comment) => comment.depth === 0).length}개의
            댓글
          </h5>
        </div>
        <div className="board-comment-write">
          <Form.Control
            className="comment-write-form"
            placeholder="댓글을 작성하세요"
            value={writeComment}
            onChange={(e) => setWriteComment(e.target.value)}
            onKeyUp={(e) => onKeyUp(e)}
          />
          <Button className="comment-write-btn" onClick={() => {}}>
            작성
          </Button>
        </div>

        <div className="board-comment-view">
          {commentData.map((data) =>
            data.depth !== 0 ? (
              ""
            ) : (
              <div className="board-comment-each">
                <div className="board-comment-writer">
                  <strong>{data.isAnonymous ? "익명" : data.writer}</strong>
                  <div className="comment-btns">
                    <button className="comment-btn-reply" onClick={() => {}}>
                      답글
                    </button>

                    <button className="comment-btn-del" onClick={() => {}}>
                      삭제
                    </button>
                  </div>
                </div>
                <div className="board-comment-date">{data.date}</div>
                <div className="board-comment-content">
                  {data.commentContent}
                </div>
                <hr className="line" />
                {data.commentReplys.length <= 0
                  ? ""
                  : data.commentReplys.map((commentReply) => (
                      <div className="board-comment-each">
                        <div className="board-comment-writer">
                          <strong>
                            {commentReply.isAnonymous
                              ? "익명"
                              : commentReply.writer}
                          </strong>
                          <div className="comment-btns">
                            <button
                              className="comment-btn-del"
                              onClick={() => {}}
                            >
                              삭제
                            </button>
                          </div>
                        </div>
                        <div className="board-comment-date">
                          {commentReply.date}
                        </div>
                        <div className="board-comment-content">
                          {commentReply.commentContent}
                        </div>
                        <hr></hr>
                      </div>
                    ))}
              </div>
            )
          )}
        </div>
      </div>
    </Container>
  );
}

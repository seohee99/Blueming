import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { fetchBoardList, fetchBoardCommentList } from "~/lib/apis/board";
import { Link } from "react-router-dom";

export default function BoardWritePage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [boardData, setBoardData] = useState([]);
  const [filteredBoardData, setFilteredBoardData] = useState([]);
  const postsPerPage = 5;

  const callCommentData = async (boardId) => {
    try {
      const response = await fetchBoardCommentList(boardId);
      return response.comments.length ? response.comments.length : 0;
    } catch (error) {
      console.error("댓글 데이터 호출 중 에러:", error);
    }
  };
  const callBoardData = async () => {
    try {
      const response = await fetchBoardList();
      const boardDataWithComments = await Promise.all(
        response.reverse().map(async (board) => {
          const commentCount = await callCommentData(board._id);
          return { ...board, commentCount };
        })
      );
      setBoardData(boardDataWithComments);
      setFilteredBoardData(boardDataWithComments);
    } catch (error) {
      console.error("보드 데이터 호출 중 에러:", error);
    }
  };

  useEffect(() => {
    callBoardData();
    callCommentData();
  }, []);

  const handleSearch = () => {
    const filteredData = boardData.filter((data) =>
      data.boardTitle.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredBoardData(filteredData);
    setPage(1);
  };

  function onKeyUp(e) {
    if (e.key == "Enter") {
      handleSearch();
      setPage(1);
    }
  }

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredBoardData.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <Container className="board-page">
      <h1>자유 게시판</h1>
      <div className="search-bar">
        <Form.Control
          className="search-form"
          type="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={(e) => onKeyUp(e)}
        />
        <Button
          className="search-btn"
          onClick={() => {
            handleSearch();
            setPage(1);
          }}
        >
          검색
        </Button>
      </div>
      <div className="write-board">
        <Button className="write-board-btn" onClick={() => {}}>
          등록
        </Button>
      </div>

      <div className="board-list">
        {currentPosts.map((data, index) => (
          <div>
            <Link
              to={`/board/${data._id}`}
              key={data._id}
              preventScrollReset
              className="text-decoration-none"
            >
              <div key={index} className="board">
                <div className="board-title-tag">
                  <div className="board-title-comment">
                    {data.boardTitle}{" "}
                    {data.commentCount ? "(" + data.commentCount + ")" : null}
                  </div>
                  {data.tag.map((boardTag) => (
                    <div className="board-tag">{boardTag}</div>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <PaginationControl
        page={page}
        between={4}
        total={filteredBoardData.length}
        limit={postsPerPage}
        changePage={(page) => {
          setPage(page);
        }}
        ellipsis={1}
      />
    </Container>
  );
}

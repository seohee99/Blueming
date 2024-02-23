import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { PaginationControl } from "react-bootstrap-pagination-control";

export default function BoardWritePage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const postsPerPage = 5;

  const boardData = [
    {
      title: "안녕하세용 오늘부터 시작이죠?",
      comment: 3,
      tag: ["잡담", "질문"],
      writer: "김투자",
      date: "2024.02.19",
    },
    {
      title: "이거 그냥 쓰면 되나요?",
      comment: 1,
      tag: ["질문"],
      writer: "김신한",
      date: "2024.02.19",
    },
    {
      title: "안녕하세용 오늘부터 시작이죠?",
      comment: 3,
      tag: ["잡담", "질문"],
      writer: "김투자",
      date: "2024.02.19",
    },
    {
      title: "이거 그냥 쓰면 되나요?",
      comment: 1,
      tag: ["질문"],
      writer: "김신한",
      date: "2024.02.19",
    },
    {
      title: "안녕하세용 오늘부터 시작이죠?",
      comment: 3,
      tag: ["잡담", "질문"],
      writer: "김투자",
      date: "2024.02.19",
    },
    {
      title: "이거 그냥 쓰면 되나요?",
      comment: 1,
      tag: ["질문"],
      writer: "김신한",
      date: "2024.02.19",
    },
    {
      title: "안녕하세용 오늘부터 시작이죠?",
      comment: 3,
      tag: ["잡담", "질문"],
      writer: "김투자",
      date: "2024.02.19",
    },
    {
      title: "이거 그냥 쓰면 되나요?",
      comment: 1,
      tag: ["질문"],
      writer: "김신한",
      date: "2024.02.19",
    },
    {
      title: "안녕하세용 오늘부터 시작이죠?",
      comment: 3,
      tag: ["잡담", "질문"],
      writer: "김투자",
      date: "2024.02.19",
    },
    {
      title: "이거 그냥 쓰면 되나요?",
      comment: 1,
      tag: ["질문"],
      writer: "김신한",
      date: "2024.02.19",
    },
    {
      title: "안녕하세용 오늘부터 시작이죠?",
      comment: 3,
      tag: ["잡담", "질문"],
      writer: "김투자",
      date: "2024.02.19",
    },
    {
      title: "이거 그냥 쓰면 되나요?",
      comment: 1,
      tag: ["질문"],
      writer: "김신한",
      date: "2024.02.19",
    },
    {
      title: "안녕하세용 오늘부터 시작이죠?",
      comment: 3,
      tag: ["잡담", "질문"],
      writer: "김투자",
      date: "2024.02.19",
    },
    {
      title: "이거 그냥 쓰면 되나요?",
      comment: 1,
      tag: ["질문"],
      writer: "김신한",
      date: "2024.02.19",
    },
    {
      title: "안녕하세용 오늘부터 시작이죠?",
      comment: 3,
      tag: ["잡담", "질문"],
      writer: "김투자",
      date: "2024.02.19",
    },
    {
      title: "이거 그냥 쓰면 되나요?",
      comment: 1,
      tag: ["질문"],
      writer: "김신한",
      date: "2024.02.19",
    },
    {
      title: "안녕하세용 오늘부터 시작이죠?",
      comment: 3,
      tag: ["잡담", "질문"],
      writer: "김투자",
      date: "2024.02.19",
    },
    {
      title: "이거 그냥 쓰면 되나요?",
      comment: 1,
      tag: ["질문"],
      writer: "김신한",
      date: "2024.02.19",
    },
    {
      title: "안녕하세용 오늘부터 시작이죠?",
      comment: 3,
      tag: ["잡담", "질문"],
      writer: "김투자",
      date: "2024.02.19",
    },
    {
      title: "이거 그냥 쓰면 되나요?",
      comment: 1,
      tag: ["질문"],
      writer: "김신한",
      date: "2024.02.19",
    },
    {
      title: "안녕하세용 오늘부터 시작이죠?",
      comment: 3,
      tag: ["잡담", "질문"],
      writer: "김투자",
      date: "2024.02.19",
    },
    {
      title: "이거 그냥 쓰면 되나요?",
      comment: 1,
      tag: ["질문"],
      writer: "김신한",
      date: "2024.02.19",
    },
    {
      title: "안녕하세용 오늘부터 시작이죠?",
      comment: 3,
      tag: ["잡담", "질문"],
      writer: "김투자",
      date: "2024.02.19",
    },
    {
      title: "이거 그냥 쓰면 되나요?",
      comment: 1,
      tag: ["질문"],
      writer: "김신한",
      date: "2024.02.19",
    },
    {
      title: "안녕하세용 오늘부터 시작이죠?",
      comment: 3,
      tag: ["잡담", "질문"],
      writer: "김투자",
      date: "2024.02.19",
    },
    {
      title: "이거 그냥 쓰면 되나요?",
      comment: 1,
      tag: ["질문"],
      writer: "김신한",
      date: "2024.02.19",
    },
    {
      title: "안녕하세용 오늘부터 시작이죠?",
      comment: 3,
      tag: ["잡담", "질문"],
      writer: "김투자",
      date: "2024.02.19",
    },
    {
      title: "이거 그냥 쓰면 되나요?",
      comment: 1,
      tag: ["질문"],
      writer: "김신한",
      date: "2024.02.19",
    },
    {
      title: "안녕하세용 오늘부터 시작이죠?",
      comment: 3,
      tag: ["잡담", "질문"],
      writer: "김투자",
      date: "2024.02.19",
    },
    {
      title: "이거 그냥 쓰면 되나요?",
      comment: 1,
      tag: ["질문"],
      writer: "김신한",
      date: "2024.02.19",
    },
    {
      title: "안녕하세용 오늘부터 시작이죠?",
      comment: 3,
      tag: ["잡담", "질문"],
      writer: "김투자",
      date: "2024.02.19",
    },
    {
      title: "이거 그냥 쓰면 되나요?",
      comment: 1,
      tag: ["질문"],
      writer: "김신한",
      date: "2024.02.19",
    },
  ];
  const [filteredBoardData, setFilteredBoardData] = useState(boardData);

  const handleSearch = () => {
    return boardData.filter((data) =>
      data.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  function onKeyUp(e) {
    if (e.key == "Enter") {
      setFilteredBoardData(handleSearch);
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
            setFilteredBoardData(handleSearch);
            setPage(1);
          }}
        >
          Search
        </Button>
      </div>

      <div className="board-list">
        {currentPosts.map((data, index) => (
          <div key={index} className="board">
            <div className="board-title-tag">
              <div className="board-title-comment">
                {data.title} ({data.comment})
              </div>
              {data.tag.map((boardTag) => (
                <div className="board-tag">{boardTag}</div>
              ))}
            </div>
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

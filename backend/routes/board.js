const express = require("express");
const router = express.Router();
const Board = require("../models/Board");
const Comment = require("../models/Comment");

//user관리 된 후 authenticate 추가 필요

//모든 게시글 조회하기
router.get("/", (req, res, next) => {
  Board.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

//게시글 작성하기
router.post("/", (req, res, next) => {
  //, userId: req.user._id
  //userId도 추가해줘야함
  Board.create({ ...req.body })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      next(err);
    });
});

//게시글 삭제하기
router.delete("/:boardId", function (req, res, next) {
  Board.findByIdAndDelete(req.params.boardId)
    .then(() => {
      //res.json(data);
      res.json({ message: "삭제 완료" });
    })
    .catch((err) => {
      next(err);
    });
});

//게시글 조회하기
router.get("/:boardId", function (req, res, next) {
  Board.findById(req.params.boardId)
    .then((board) => {
      res.json(board);
    })
    .catch((err) => {
      next(err);
    });
});

//게시글 댓글 조회하기
router.get("/:boardId/comment", async function (req, res, next) {
  try {
    const comments = await Comment.find({
      boardId: req.params.boardId,
    }).populate("commentReplys");

    res.json({ comments });
  } catch (err) {
    next(err);
  }
});

//게시글과 댓글 조회하기
router.get("/:boardId/boardAndComment", async function (req, res, next) {
  try {
    const boards = await Board.findById(req.params.boardId);
    const comments = await Comment.find({
      boardId: req.params.boardId,
    }).populate("commentReplys");

    res.json({ boards, comments });
  } catch (err) {
    next(err);
  }
});

//게시글 댓글 달기
router.post("/:boardId/comment", (req, res, next) => {
  const { boardId } = req.params;
  //console.log(req.body);

  Comment.create({
    ...req.body,
    boardId: boardId,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
});

//게시글 댓글 삭제하기
router.delete("/:boardId/comment/:commentId", function (req, res, next) {
  const { commentId } = req.params;

  Comment.deleteOne({
    _id: commentId,
  })
    .then(() => {
      res.json({ message: "삭제 완료" });
    })
    .catch((err) => {
      next(err);
    });
});

//게시글 대댓글 달기
router.post("/:boardId/comment/:commentId", function (req, res, next) {
  const { boardId, commentId } = req.params;
  let createdCommentId; // 추가된 댓글의 ID를 저장하기 위한 변수

  Comment.create({
    ...req.body,
    boardId: boardId,
    commentReplys: [],
  })
    .then((data) => {
      createdCommentId = data._id; // 추가된 댓글의 ID 저장
      return Comment.findByIdAndUpdate(
        commentId,
        { $push: { commentReplys: data } },
        { new: true }
      );
    })
    .then(() => {
      console.log(createdCommentId);
      //create로 인해 그냥 댓글도 만들어지니까 댓글은 삭제
      return Comment.deleteOne({
        _id: createdCommentId,
      });
    })
    .then(() => {
      res.json({
        message: "대댓글 추가 및 불필요하게 추가되는 댓글 삭제 완료",
      });
    })
    .catch((err) => {
      next(err);
    });
});

//게시글 대댓글 삭제하기
router.delete(
  "/:boardId/comment/:commentId/commentReply/:commentReplyId",
  function (req, res, next) {
    const { commentId, commentReplyId } = req.params;

    Comment.findByIdAndUpdate(
      commentId,
      { $pull: { commentReplys: { _id: commentReplyId } } },
      { new: true }
    )
      .then(() => {
        res.json({ message: "대댓글 삭제 완료" });
      })
      .catch((err) => {
        next(err);
      });
  }
);

module.exports = router;

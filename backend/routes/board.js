const express = require("express");
const router = express.Router();
const Board = require("../models/Board");

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

router.post("/", (req, res, next) => {
  Board.create({ ...req.body, userId: req.user._id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;

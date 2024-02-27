const User = require("../../models/User");
const Alarm = require("../../models/Alarm");

module.exports = function (io) {
  console.log("a user connected");

  // 로직 작성
  // io.on("login", function() (email, sid)) .... (유저가 로그인 하면 socketId를 token에 업데이트) 등등

  io.on("disconnect", function () {
    console.log("user disconnected");
  });
};

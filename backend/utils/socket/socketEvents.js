const User = require("../../models/User");
const Alarm = require("../../models/Alarm");
module.exports = function (io) {
  io.on("connection", async (socket) => {
    console.log("a user connected", socket.id);
    console.log("===============");
    // 로직 작성
    //.... (유저가 로그인 하면 socketId를 token에 업데이트) 등등

    socket.on("setSid", async (userObj) => {
      // console.log(userObj);
      // console.log("SocketID::::", socket.id);
      // console.log("backend::::", userObj.sid);
      const user = await User.setSid(userObj.email, userObj.sid);
      // if (user.sid)
      //   console.log("User.setSid를 보내고 받아온 USER !!!!!!!", user);
    });

    socket.on("setHeaderMessage", async (message) => {
      console.log("message :: ", message);

      await socket.emit("setHeaderMessageBack", message);
    });

    // socket.on("message", async (alarm) => {
    //   console.log("alarm :: ", alarm);
    //   try {
    //     const user = await User.checkUserBySid(socket.id);
    //     if (user) {
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    //   // console.log("user :: ", user);
    // });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};

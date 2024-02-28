const User = require("../../models/User");
const Alarm = require("../../models/Alarm");
module.exports = function (io) {
  io.on("connection", async (socket) => {
    console.log("a user connected", socket.id);
    console.log("===============");

    socket.on("setSid", async (userObj) => {
      console.log("SocketID::::", socket.id);
      const user = await User.setSid(userObj.email, socket.id);
      console.log("User.setSid를 보내고 받아온 USER !!!!!!!", user);
    });


    socket.on("setHeaderMessage", async (message) => {
      console.log("message :: ", message);

      await socket.emit("setHeaderMessageBack", message);
    });

    
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};

const { Server } = require("socket.io");

const io = new Server({
  cors: {
    origin: "http://localhost:5173",
  },
});

require("./socketEvents")(io);

// io.on("connection", socketConnection);

module.exports = io;

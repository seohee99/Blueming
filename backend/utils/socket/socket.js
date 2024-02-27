const { Server } = require("socket.io");
const socketConnection = require("./socketEvents");

const io = new Server({
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", socketConnection);

module.exports = io;

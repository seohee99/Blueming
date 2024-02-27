const mongoose = require("mongoose");

const alarmSchema = new mongoose.Schema({
  alarmTitle: {
    type: String,
    required: true,
  },
  alarmContent: {
    type: String,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  userName: {
    type: String,
    required: true,
  },
});

alarmSchema.set("timestamps", {
  createdAt: "commentCreatedAt",
  updatedAt: "commentUpdatedAt",
});

const Alarm = mongoose.model("Alarm", alarmSchema);

module.exports = Alarm;

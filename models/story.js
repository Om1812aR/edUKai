const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  story: { type: String, required: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Story", storySchema);

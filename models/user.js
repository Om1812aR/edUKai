// edukai-backend/models/user.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["student", "admin"], default: "student" },
  phone: { type: String },
  dob: { type: Date },
  courseOfInterest: { type: String },
  education: { type: String },
  goals: { type: String },
  experience: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);

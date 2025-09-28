const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: String,
  slug: String,
  description: String,
  instructor: String,
  level: String,
  price: Number,
  duration: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', CourseSchema);

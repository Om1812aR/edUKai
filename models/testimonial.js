// edukai-backend/models/testimonial.js
const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  authorName: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Testimonial', TestimonialSchema);

const express = require("express");
const Blog = require("../models/blog");
const Story = require("../models/story");

const router = express.Router();

// Get all blog posts
router.get("/blog", async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

// Get all student stories
router.get("/stories", async (req, res) => {
  const stories = await Story.find().sort({ createdAt: -1 });
  res.json(stories);
});

module.exports = router;

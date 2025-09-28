const express = require("express");
const Blog = require("../models/blog");
const Story = require("../models/story");
const { auth, adminOnly } = require("../middleware/auth");

const router = express.Router();

// Add blog (Admin only)
router.post("/blog", auth, adminOnly, async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ msg: "Error saving blog" });
  }
});

// Add student story (Admin only)
router.post("/story", auth, adminOnly, async (req, res) => {
  try {
    const story = new Story(req.body);
    await story.save();
    res.json(story);
  } catch (err) {
    res.status(500).json({ msg: "Error saving story" });
  }
});



module.exports = router;

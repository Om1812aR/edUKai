// edukai-backend/routes/api/courses.js
const express = require('express');
const router = express.Router();
const Course = require('../../models/courses'); // make sure model file is models/courses.js (lowercase)

router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;

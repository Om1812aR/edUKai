// edukai-backend/routes/api/enrollments.js
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Enrollment = require('../../models/enrollments'); // matches models/enrollments.js

router.post('/', auth, async (req, res) => {
  const { courseId, depositPaid } = req.body;
  try {
    const enrollment = new Enrollment({
      user: req.user.id,
      course: courseId,
      status: depositPaid ? 'paid' : 'pending'
    });
    await enrollment.save();
    res.json(enrollment);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;

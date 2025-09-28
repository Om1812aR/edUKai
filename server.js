// edukai-backend/server.js
const express = require("express");   // import express framework
const dotenv = require("dotenv");     // loads variables from .env
const cors = require("cors");         // allows frontend to connect from another domain
const connectDB = require("./config/db"); // function to connect to MongoDB

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize express app
const app = express();

// Middleware
app.use(cors());         // enable CORS (frontend on http://localhost can talk to backend)
app.use(express.json()); // parse incoming JSON requests (req.body)

// =================== ROUTES ===================

// Auth routes (signup, login)
app.use("/api/auth", require("./routes/auth"));

// Course routes
app.use("/api/courses", require("./routes/api/courses"));

// Enrollment routes
app.use("/api/enrollments", require("./routes/api/enrollments"));

// Admin routes (add blog, add stories, admin-only actions)
app.use("/api/admin", require("./routes/admin"));

// Public routes (fetch blogs, fetch stories, accessible to all)
app.use("/api", require("./routes/public"));

// ==============================================

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

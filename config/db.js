const mongoose = require("mongoose");  // import mongoose library

const connectDB = async () => {        // async function (since DB connection takes time)
  try {
    await mongoose.connect(process.env.MONGO_URI);  
    // connect using the link stored in .env
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Error:", err.message); 
    process.exit(1);  // exit app if DB connection fails
  }
};

module.exports = connectDB;  // export function so server.js can use it

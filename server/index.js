require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

// middlewares
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// 🔥 ADD THIS (IMAGE FIX)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// DB
connectDB();

// routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/employees", require("./routes/employeeRoutes"));

// test
app.get("/", (req, res) => {
  res.send("Server running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on", PORT));
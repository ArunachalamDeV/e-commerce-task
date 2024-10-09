"use strict";
const express = require("express");
const { authenticate } = require("./middleWare");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = () => {
  const app = express();
  // middleware Connection
  app.use(cors());
  app.use(express.json());
  app.post("/signup", async (req, res) => {
    const { name, password, email } = req.body;
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const token = jwt.sign(
      { name, hashedPassword, email },
      process.env.jwtSecret,
      {
        expiresIn: "8h",
      }
    );

    res.json({
      status: "success",
      message: "User registered successfully!",
      token: token,
      email,
      name
    });
  });

  // Login and get JWT token
  app.post("/signin", async (req, res) => {
    const { username, password } = req.body;
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // Create a JWT token
    const token = jwt.sign({ username: user.username }, process.env.jwtSecret, {
      expiresIn: "1h",
    });

    res.json({status:"success",token });
  });

  app.get("/check", authenticate, function (req, res) {
    res.json({
      status: "success",
      isAuth: true,
      message: "You are authenticated",
    });
  });

  app.get("/", (req, res) => {
    res.json({ message: "Welcome to the API" });
  });

  app.use("/api", authenticate);

  return app;
};

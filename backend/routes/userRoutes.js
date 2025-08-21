const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

// Register new Users
router.post("/register", registerUser);

// Login in users
router.post("/login", loginUser);

router.get("/current_user", authMiddleware, getCurrentUser);

module.exports = router;

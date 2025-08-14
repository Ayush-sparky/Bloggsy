const express = require("express");
const { postComment } = require("../controllers/commentController");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

// Post Comment / Reply
router.post("/post", authMiddleware, postComment);

module.exports = router;

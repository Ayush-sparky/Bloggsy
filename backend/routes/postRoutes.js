const express = require("express");
const { createPost } = require("../controllers/postController");
const router = express.Router();
const upload = require("../multerConfig");
const authMiddleware = require("../middlewares/authMiddleware");

// Create post
router.post("/create", upload.single("cover"), authMiddleware, createPost);

module.exports = router
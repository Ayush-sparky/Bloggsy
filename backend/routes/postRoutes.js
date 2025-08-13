const express = require("express");
const { createPost, getAllPosts } = require("../controllers/postController");
const router = express.Router();
const upload = require("../multerConfig");
const authMiddleware = require("../middlewares/authMiddleware");

// Create post
router.post("/create", upload.single("cover"), authMiddleware, createPost);

// Get all posts (pagination supported)
router.get("/", getAllPosts);

module.exports = router;

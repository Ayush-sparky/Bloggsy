const express = require("express");
const {
  createPost,
  getAllPosts,
  updatePost,
  deletePost,
} = require("../controllers/postController");
const router = express.Router();
const upload = require("../multerConfig");
const authMiddleware = require("../middlewares/authMiddleware");

// Create post
router.post("/create", authMiddleware, upload.single("cover"), createPost);

// Get all posts (pagination supported)
router.get("/", getAllPosts);

// Edit post (only author have the authority)
router.put("/update/:id", authMiddleware, upload.single("cover"), updatePost);

// Delete post (authorized only)
router.delete("/delete/:id", authMiddleware, deletePost);

module.exports = router;

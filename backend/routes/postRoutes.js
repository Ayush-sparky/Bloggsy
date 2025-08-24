const express = require("express");
const {
  createPost,
  updatePost,
  deletePost,
  getOthersPosts,
  getMyPosts,
} = require("../controllers/postController");
const router = express.Router();
const upload = require("../multerConfig");
const authMiddleware = require("../middlewares/authMiddleware");

// Create post
router.post("/create", authMiddleware, upload.single("cover"), createPost);

// Get all posts except self (pagination supported)
router.get("/others", authMiddleware, getOthersPosts);

// Get all posts of logged in user (self)
router.get("/my", authMiddleware, getMyPosts);

// Edit post (only author has the authority)
router.put("/update/:id", authMiddleware, upload.single("cover"), updatePost);

// Delete post (authorized only)
router.delete("/delete/:id", authMiddleware, deletePost);

module.exports = router;

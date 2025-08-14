const express = require("express");
const { postComment, getSinglePostComments } = require("../controllers/commentController");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

// Post Comment / Reply
router.post("/post", authMiddleware, postComment);

router.get('/:postId',getSinglePostComments)

module.exports = router;

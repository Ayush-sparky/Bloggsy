const commentModel = require("../models/commentModel");

const postComment = async (req, res, next) => {
  const { content, postId, parentCommentId } = req.body;

  if (!content) {
    const error = new Error("Comment is required");
    error.statusCode = 400;
    return next(error);
  }

  if (!postId) {
    const error = new Error("Failed to load comment for this post");
    error.statusCode = 404;
    return next(error);
  }

  try {
    const newComment = await commentModel.create({
      content,
      post: postId,
      author: req.user.id,
      parentCommentId: parentCommentId || null,
    });

    res.status(201).json({
      message: "Comment posted successfully",
      comment: newComment,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  postComment,
};

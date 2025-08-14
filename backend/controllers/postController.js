const postModel = require("../models/postModel");

const createPost = async (req, res, next) => {
  const { title, content } = req.body;

  if (!title || !content) {
    const error = new Error("All fields are required");
    error.statusCode = 400;
    return next(err);
  }

  try {
    const newPost = await postModel.create({
      title,
      content,
      author: req.user.id,
      coverImage: req.file ? `/uploads/${req.file.filename}` : null,
    });

    res.status(201).json({
      message: "New Post created successfully",
      newPost,
    });``
  } catch (err) {
    next(err);
  }
};

const getAllPosts = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit; // Calc how many posts to skip (depends on the page no. and limit set)

  try {
    const totalPosts = await postModel.countDocuments();
    const allPosts = await postModel
      .find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.status(200).json({
      Total_Posts: totalPosts,
      totalPages: Math.ceil(totalPosts / limit),
      currentPage: page,
      allPosts,
    });
  } catch (err) {
    next(err);
  }
};

const updatePost = async (req, res, next) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!id) {
    const error = new Error("Couldn't find the post");
    error.statusCode = 400;
    return next(err);
  }

  try {
    const post = await postModel.findById(id);

    if (!post) {
      const error = new Error("Couldn't find the post");
      error.statusCode = 400;
      return next(err);
    }

    if (post.author.toString() !== req.user.id) {
      const error = new Error("Not authorized to edit the post");
      error.statusCode = 403;
      return next(err);
    }

    if (title) post.title = title;
    if (content) post.content = content;
    if (req.file) post.coverImage = req.file.filename;

    const updatedPost = await post.save();

    res.status(200).json({
      message: "Post update successfully",
      updatedPost,
    });
  } catch (err) {
    next(err);
  }
};

const deletePost = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    const error = new Error("Couldn't find the post");
    error.statusCode = 400;
    return next(err);
  }

  try {
    const post = await postModel.findById(id);

    if (!post) {
      const error = new Error("Post not found");
      error.statusCode = 404;
      return next(err);
    }

    if (post.author.toString() !== req.user.id) {
      const error = new Error("Not authorized to delete the post");
      error.statusCode = 403;
      return next(err);
    }

    await postModel.findByIdAndDelete(id);

    res.status(200).json({
      message: "Post deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createPost,
  getAllPosts,
  updatePost,
  deletePost,
};

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
    });
  } catch (err) {
    next(err);
  }
};

const getAllPosts = async (req, res, next) => {};
const updatePost = async (req, res, next) => {};
const deletePost = async (req, res, next) => {};

module.exports = {
  createPost,
};

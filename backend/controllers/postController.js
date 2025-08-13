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
const updatePost = async (req, res, next) => {};
const deletePost = async (req, res, next) => {};

module.exports = {
  createPost,
  getAllPosts,
  updatePost,
  deletePost,
};

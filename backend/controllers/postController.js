const postModel = require("../models/postModel");

const createPost = async (req, res, next) => {
  const { title, content } = req.body;

  if (!title || !content) {
    const error = new Error("All fields are required");
    error.statusCode = 400;
    return next(error);
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

const getOthersPosts = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  try {
    const loggedInUserId = req.user.id;

    const totalPosts = await postModel.countDocuments({
      author: { $ne: loggedInUserId },
    });

    const allPosts = await postModel
      .find({ author: { $ne: loggedInUserId } }) // exclude self posts
      .populate("author", "username -_id") // only send username (not _id)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.status(200).json({
      Total_Posts: totalPosts,
      totalPages: Math.ceil(totalPosts / limit),
      currentPage: page,
      posts: allPosts, 
    });
  } catch (err) {
    next(err);
  }
};

const getMyPosts = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  try {
    // 1. Identify the logged-in user
    const loggedInUserId = req.user.id;
    // (comes from your auth middleware after JWT verification)

    // 2. Count how many posts the logged-in user has
    const totalPosts = await postModel.countDocuments({
      author: loggedInUserId,
    });

    // 3. Query posts authored by this user, with pagination + sorting
    const myPosts = await postModel
      .find({ author: loggedInUserId })
      .populate("author", "username -_id") // optional: keep username in response
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    // 4. Send structured response
    res.status(200).json({
      Total_Posts: totalPosts,
      totalPages: Math.ceil(totalPosts / limit),
      currentPage: page,
      posts: myPosts,
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
    return next(error);
  }

  try {
    const post = await postModel.findById(id);

    if (!post) {
      const error = new Error("Couldn't find the post");
      error.statusCode = 400;
      return next(error);
    }

    if (post.author.toString() !== req.user.id) {
      const error = new Error("Not authorized to edit the post");
      error.statusCode = 403;
      return next(error);
    }

    if (title) post.title = title;
    if (content) post.content = content;
    if (req.file) post.coverImage = `/uploads/${req.file.filename}`;

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
    return next(error);
  }

  try {
    const post = await postModel.findById(id);

    if (!post) {
      const error = new Error("Post not found");
      error.statusCode = 404;
      return next(error);
    }

    if (post.author.toString() !== req.user.id) {
      const error = new Error("Not authorized to delete the post");
      error.statusCode = 403;
      return next(error);
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
  getOthersPosts,
  updatePost,
  deletePost,
  getMyPosts
};

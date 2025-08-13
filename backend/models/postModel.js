const mongoose = require("mongoose");

// Defining (Creating) user schema (layout or structure for user model)
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  coverImage: {
    type: String,
  },
});

// Creating a model based on the userSchema
const postModel = mongoose.model("posts", postSchema);
module.exports = postModel;

const mongoose = require("mongoose");

// Defining (Creating) post schema (layout or structure for post model)
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
},{timestamps: true});

// Creating a model based on the postSchema
const postModel = mongoose.model("posts", postSchema);
module.exports = postModel;

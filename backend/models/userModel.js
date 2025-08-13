const mongoose = require("mongoose");

// Defining (Creating) user schema (layout or structure for user model)
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Creating a model based on the userSchema
const userModel = mongoose.model("users",userSchema)
module.exports = userModel
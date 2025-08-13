const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    const error = new Error("All fields are required");
    error.statusCode = 400;
    return next(error);
  }

  try {
    const emailExist = await userModel.findOne({ email });

    if (emailExist) {
      const error = new Error("Email already in use");
      error.statusCode = 400;
      return next(error);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "New user registered successfully",
      newUser,
    });
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {};

module.exports = {
  registerUser,
  loginUser,
};

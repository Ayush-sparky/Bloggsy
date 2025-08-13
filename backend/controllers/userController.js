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

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    const error = new Error("Missing email or password");
    error.statusCode = 400;
    return next(err);
  }

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      const error = new Error("Invalid email or password");
      error.statusCode = 400;
      return next(err);
    }

    const isMatch = bcrypt.compare(password, user.password);

    if (!isMatch) {
      const error = new Error("Invalid email or password");
      error.statusCode = 400;
      return next(err);
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET,{expiresIn: '1h'});
    res.status(200).json({
      message: "Logged in successfully",
      token,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  registerUser,
  loginUser,
};

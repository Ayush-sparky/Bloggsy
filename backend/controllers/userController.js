const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res, next) => {
  const { username, email, password, bio } = req.body;

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
      bio: bio || null,
      profile_image: req.file ? `/uploads/${req.file.filename}` : null,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({
      message: "New user registered successfully",
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        bio: newUser.bio,
        profile_image: newUser.profile_image,
      },
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
    return next(error);
  }

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      const error = new Error("Invalid email or password");
      error.statusCode = 400;
      return next(error);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const error = new Error("Invalid email or password");
      error.statusCode = 400;
      return next(error);
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    next(err);
  }
};

const getCurrentUser = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
};

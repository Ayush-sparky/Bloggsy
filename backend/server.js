const express = require("express");
const app = express();
const PORT = 3030;
require("dotenv").config();
const path = require("path");

// CORS
const cors = require("cors");

// Middlewares
const errorHandler = require("./middlewares/errorHandler");

// Routes
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

// DB
const DBconnection = require("./DBconfig");

// ------------------------------------------------------------------------------------------- //

// DB connection
DBconnection(process.env.MONGO_URI);

// Serve 'uploads' folder as static
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// CORS
app.use(cors());

// Express body JSON parser middleware
app.use(express.json());

// User Routes
app.use("/api/users", userRoutes);

// Post Routes
app.use("/api/posts", postRoutes);

// Comment Routes
app.use("/api/comments", commentRoutes);

// Global Error Hanlding Middleware (always after routes or at the end to catch almost all errors)
app.use(errorHandler);

app.listen(PORT, () => console.log("Server Running on PORT: ", PORT));

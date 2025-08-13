const express = require("express");
const app = express();
const PORT = 3030;
require("dotenv").config();
const path = require("path");

// Middlewares
const errorHandler = require("./middlewares/errorHandler");

// Routes
const userRoutes = require("./routes/userRoutes");

// DB
const DBconnection = require("./DBconfig");

// ------------------------------------------------------------------------------------------- //

// DB connection
DBconnection(process.env.MONGO_URI);

// Serve 'uploads' folder as static
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Express body JSON parser middleware
app.use(express.json());

// User Routes
app.use("/api/users", userRoutes);

// Global Error Hanlding Middleware (always after routes or at the end to catch almost all errors)
app.use(errorHandler);

app.listen(PORT, () => console.log("Server Running on PORT: ", PORT));

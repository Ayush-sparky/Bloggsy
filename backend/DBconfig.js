const mongoose = require("mongoose");

const DBconnection = (url) => {
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected successfully🚀🚀"))
    .catch((err) => console.log("DB Connection error: ", err));
};

module.exports = DBconnection;

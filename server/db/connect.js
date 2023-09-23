const mongoose = require("mongoose");
require("dotenv").config();
const dbURL = process.env.CONNCETION_STRING;
const connectDb = () => {
  mongoose
    .connect(dbURL)
    .then(() => console.log("Connected"))
    .catch((error) => console.log(error));
};

module.exports = connectDb;

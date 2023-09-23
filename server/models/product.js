const mongoose = require("mongoose");

const products = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "price must provided"],
  },
  featured: {
    type: Boolean,
    required: false,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["apple", "samsung", "dell", "hp"],
      message: `{VALUE} is not supported`,
    },
  },
});

module.exports = mongoose.model("Product", products);

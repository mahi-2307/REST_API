const connectDb = require("./db/connect");
require("dotenv").config();
const Product = require("./models/product");
const ProductJSON = require("./product.json");

const start = async () => {
  await connectDb(process.env.MONGO_URL);
  await Product.deleteMany()
  await Product.create(ProductJSON).then(console.log("success"));
};
start();

const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { company, featured, sort, select } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
    console.log(queryObject.company);
  }
  if (featured) {
    queryObject.featured = featured;
    console.log(queryObject.featured);
  }
  let dataFetch = Product.find(queryObject);

  if (sort) {
    let sortOut = sort.replace(",", " ");
    dataFetch = dataFetch.sort(sortOut);
  }

  if (select) {
    let sortOut = select.split(",").join(" ");
    dataFetch = dataFetch.select(sortOut);
  }

  const getData = await dataFetch;
  res.status(200).json({ getData });
};

module.exports = { getAllProducts };

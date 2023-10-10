const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { company, featured, sort, select } = req.query;
  const { search } = req.query;
  const { minPrice, maxPrice } = req.query;
  const queryObject = {};
if (minPrice && maxPrice) {
  queryObject.price = { $gte: minPrice, $lte: maxPrice };
}

  if (search) {
    queryObject.$text = { $search: search };
  }

  if (company) {
    queryObject.company = company;
    console.log(queryObject.company);
  }
  if (featured) {
    queryObject.featured = featured;
    console.log(queryObject.featured);
  }
  let dataFetch = Product.find(queryObject);
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  dataFetch = dataFetch.skip(skip).limit(limit);

  if (sort) {
    let sortOut = sort.replace(",", " ");
    dataFetch = dataFetch.sort(sortOut);
  }

  if (select) {
    let sortOut = select.split(",").join(" ");
    dataFetch = dataFetch.select(sortOut);
  }

  try {
    const getData = await dataFetch;
    res.status(200).json({ data: getData, totalProducts });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}
  
module.exports = { getAllProducts };

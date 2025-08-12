const { products } = require("./data");

console.log("Express Tutorial");

// immport express module
const express = require("express");

// creation of the app
const app = express();

// statements for middleware
app.use(express.static("./public"));

//app.get
app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});

// get product data
app.get("/api/v1/products", (req, res) => {
  res.json({ products });
});

// get single product
app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);

  if (!product) {
    return res.status(404).json({ message: "product not found" });
  }
  res.json(product);
});

// query
app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;

  let filteredProducts = [...products];

  if (search) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().startsWith(search.toLowerCase())
    );
  }

  if (limit) {
    filteredProducts = filteredProducts.slice(0, parseInt(limit));
  }

  res.json(filteredProducts);
});

// sort by cost
app.get("/api/v1/lowToHigh", (req, res) => {
  let filteredProducts = [...products];

  filteredProducts.sort((a, b) => a.price - b.price);

  const pricesOnly = filteredProducts.map((product) => ({
    price: product.price,
  }));

  console.log("Sorted prices:", pricesOnly);
  res.json(pricesOnly);
});

//tells the server where to listen
app.listen(3000, () => {
  console.log("server is running on localhost:3000");
});

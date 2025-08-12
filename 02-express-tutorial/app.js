// immport express module, creation of the app
const express = require("express");
const app = express();

const { products, people } = require("./data");

// middleware function
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.use(logger);

console.log("Express Tutorial");

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// statements for middleware
app.use(express.static("./public"));

const peopleRouter = require("./routes/people");
app.use("/api/v1/people", peopleRouter);

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

// // get people data
// app.get("/api/v1/people", (req, res) => {
//   res.json({ people });
// });

// // post people data
// app.post("/api/v1/people", (req, res) => {
//   const { name } = req.body;

//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: "Please provide a name" });
//   }

//   people.push({ id: people.length + 1, name: req.body.name });
//   res.status(201).json({ success: true, name: req.body.name });
// });

const express = require("express");
const cors = require("cors");
const { products } = require("./modules/data.js");
const { arrayBuffer } = require("stream/consumers");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => {
  console.log("run on port 5000");
});

// console.log(__dirname);
app.use("/", express.static(__dirname + "/public"));

// CRUD
// READ- GET all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// READ- GET search products
app.get("/api/products/search", (req, res) => {
  const name = req.query.q;
  const products_result = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (products_result.length === 0) {
    return res.status(200).send("Product name not found");
  }
  res.json(products_result);
});

// READ- GET one product
app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((item) => item.id == id);
  if (!product) {
    return res.status(404).send("Not Found");
  }
  res.json(product);
});

app.get("/zivuch", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

// CREATE- POST create new product
app.post("/api/products", (req, res) => {
  console.log(req.body);
  const newProd = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProd);
  res.json(products);
});

// UPDATE- PUT update product
app.put("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const index = products.findIndex((prod) => {
    return prod.id == id;
  });
  if (index === -1) {
    res.sendStatus(404);
  }
  products[index].name = req.body.name;
  products[index].price = req.body.price;
  res.status(200).json(products);
});

// DELETE- DELETE a product
app.delete("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const index = products.findIndex((prod) => {
    return prod.id == id;
  });
  if (index === -1) {
    res.sendStatus(404);
  }
  products.splice(index, 1);

  res.status(200).json(products);
});

//CRUD
//GET ->  Read data
//POST -> Create new data
//PUT -> Update data
//DELETE = Delete data

// Post -> http://localhost:5000/user -> body
// Get -> http://localhost:5000/user -> read data
// Put -> http://localhost:5000/user -> Update
// Delete -> http://localhost:5000/user -> Delete

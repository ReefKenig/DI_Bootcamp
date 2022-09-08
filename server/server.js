const express = require("express");
const cors = require("cors");
const { products } = require("./modules/data.js");

const app = express();
app.use(cors());

app.listen(5000, () => {
  console.log("run on port 5000");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

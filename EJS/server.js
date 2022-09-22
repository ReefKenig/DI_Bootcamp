const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { render } = require("ejs");

dotenv.config();

const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

app.get("/home", (req, res) => {
  res.render("pages/index");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.get("/shop", (req, res) => {
  const products = [
    {
      id: 1,
      name: "iPhone",
      price: 800,
    },
    {
      id: 2,
      name: "iPad",
      price: 700,
    },
    {
      id: 3,
      name: "iWatch",
      price: 600,
    },
  ];
  res.render("pages/shop", { title: "Shop with EJS", data: products });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening on port ${process.env.PORT || 5000}`);
});

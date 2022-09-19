const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const productsRouter = require("./routes/products.js");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productsRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log("run on port 5000");
});

app.use("/", express.static(__dirname + "/public"));

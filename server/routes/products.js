const express = require("express");
const router = express.Router();
const {
  _getAllProducts,
  _getProduct,
  _searchProduct,
  _insertProduct,
  _updateProduct,
  _deleteProduct,
} = require("../controllers/products.js");

router.get("/search", _searchProduct);
router.get("/:id", _getProduct);
router.get("/", _getAllProducts);

router.post("/", _insertProduct);

router.put("/:pid", _updateProduct);

router.delete("/:id", _deleteProduct);

module.exports = router;

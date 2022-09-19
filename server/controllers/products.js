const {
  getAllProducts,
  getProduct,
  searchProduct,
  insertProduct,
  updateProduct,
  deleteProduct,
} = require("../modules/products.js");

const _getAllProducts = (req, res) => {
  getAllProducts()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "not found" });
    });
};

const _getProduct = (req, res) => {
  getProduct(req.params.q)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "not found" });
    });
};

const _searchProduct = (req, res) => {
  searchProduct(req.query.q)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "not found" });
    });
};

const _insertProduct = (req, res) => {
  insertProduct(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "not found" });
    });
};

const _updateProduct = (req, res) => {
  updateProduct(req.params.pid, req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "something is wrong" });
    });
};

const _deleteProduct = (req, res) => {
  deleteProduct(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "something is wrong" });
    });
};

module.exports = {
  _getAllProducts,
  _getProduct,
  _searchProduct,
  _insertProduct,
  _updateProduct,
  _deleteProduct,
};

const db = require("../connections/localDB.js");

const getAllProducts = () => {
  return db("products").select("id", "name", "price");
};

const getProduct = (product_id) => {
  return db("products").select("id", "name", "price").where({ id: product_id });
};

const searchProduct = (product_name) => {
  return db("products")
    .select("id", "name", "price")
    .whereILike("name", `${product_name}%`);
};

const insertProduct = (product) => {
  return db("products").insert(product).returning("*");
};

const updateProduct = (product_id, product) => {
  return db("products")
    .update(product)
    .where({ id: product_id })
    .returning("*");
};

const deleteProduct = (product_id) => {
  return db("products").where({ id: product_id }).del().returning("*");
};

module.exports = {
  getAllProducts,
  getProduct,
  searchProduct,
  insertProduct,
  updateProduct,
  deleteProduct,
};

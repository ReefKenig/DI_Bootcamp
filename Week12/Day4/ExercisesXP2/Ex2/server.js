const express = require("express");

const app = express();
app.get("/:id", (req, res) => {
  const id = req.params.id;
  const idObj = { id: id };
  console.log(idObj);
  res.json(idObj);
});
app.listen(3000, () => {
  console.log("running on port 3000");
});

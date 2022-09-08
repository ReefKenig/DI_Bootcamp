const express = require("express");
// const cors = require("cors");

const app = express();

app.get("/", function (req, res) {
  res.send("<html><body><h1>This is an HTML tag</h1></body></html>");
});

app.listen(3000);

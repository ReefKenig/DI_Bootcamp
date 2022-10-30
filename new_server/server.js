const express = require("express");
const path = require("path");

const app = express();

app.listen(process.env.PORT || 3001, () => {
  console.log(`listening on ${process.env.PORT || 3001}`);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server" });
});

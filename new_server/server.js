const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

app.listen(process.env.PORT || 3001, () => {
  console.log(`listening on ${process.env.PORT || 3001}`);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use("/", express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

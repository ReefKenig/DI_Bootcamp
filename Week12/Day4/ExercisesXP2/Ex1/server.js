const express = require("express");

const app = express();
app.use("/", express.static(__dirname + "/public"));
app.get("/get-user", (req, res) => {
  const user = {
    firstname: "John",
    lastname: "Doe",
  };
  res.json(user);
});
app.listen(3000, () => {
  console.log("running on port 3000");
});

const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(__dirname + "/public"));

const users = [];

app.post("/register", (req, res) => {
  console.log(req.body);
  const f = fs.readFileSync("./users");
  const users = JSON.parse(f.toString() || []);
  const index = users.findIndex((item) => {
    return item.username === req.body.username;
  });
  if (index === -1) {
    users.push(req.body);
    fs.writeFile("./users", JSON.stringify(users), (err) => {
      if (err) {
        console.log(err);
      }
    });
    return res.status(200).json({ msg: "ok", username: req.body.username });
  }
  return res
    .status(201)
    .json({ msg: "username already exists", username: req.body.username });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const f = fs.readFileSync("./users");
  const users = JSON.parse(f.toString());

  const user = users.find((item) => item.username == req.body.username);
  if (user) {
    if (req.body.password === user.password) {
      return res
        .status(200)
        .json({ msg: "welcome", username: req.body.username });
    } else {
      return res.status(404).json({ msg: "wrong password" });
    }
  } else {
    return res.status(404).json({ msg: "username doesn't exist" });
  }

  res.json({ msg: "ok" });
});

app.listen(5000, () => {
  console.log("Running on 5000");
});

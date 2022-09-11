const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/aboutMe/:hobby", (req, res) => {
  const hobby = req.params.hobby;
  if (!isNaN(hobby) || hobby.length <= 0) {
    return res.status(404).send("No hobby specified");
  }
  res.send(hobby);
});

app.get("/pic", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(
    "<html><body><img src='https://i.ytimg.com/vi/OMx1z3q2a_I/maxresdefault.jpg' alt='pic'></img></body></html>"
  );
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/form", (req, res) => {
  const email = req.body.email;
  const message = req.body.message;
  res.end(`${email} sent you a message "${message}"`);
});

app.post("/formData", (req, res) => {
  const email = req.body.email;
  const message = req.body.message;
  return res.send(`${email} sent you a message "${message}"`);
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});

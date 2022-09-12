const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Display hobby
app.get("/aboutMe/:hobby", (req, res) => {
  const hobby = req.params.hobby;
  if (!isNaN(hobby) || hobby.length <= 0) {
    return res.status(404).send("No hobby specified");
  }
  res.send(hobby);
});

// Show picture
app.get("/pic", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(
      "<html><body><img src='https://i.ytimg.com/vi/OMx1z3q2a_I/maxresdefault.jpg' alt='pic'></img></body></html>"
      );
    });

// Send form
app.use("/form", express.static(__dirname + "/public"));

// Redirect to see message
app.get("/formData", (req, res) => {
    const response = req.query;
    res.send(`${response.email} sent you a message "${response.message}"`);
});

// Listen on 5000
app.listen(5000, () => {
    console.log("Listening on 5000");
})
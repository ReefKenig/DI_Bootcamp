const http = require("http");
const user = {
  firstname: "John",
  lastname: "Doe",
};

http
  .createServer(function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(user));
  })
  .listen(8080);

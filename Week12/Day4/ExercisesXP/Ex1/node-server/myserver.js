const http = require("http");

http
  .createServer(function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(
      "<html><body><h1>This is my first response</h1><h2>This is my second response</h2><h3>This is my third response</h3></body></html>"
    );
  })
  .listen(3000);

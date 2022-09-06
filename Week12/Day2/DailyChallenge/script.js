const b = 5;
const { a, currentDate } = require("./main.js");
const result = a + b;

let http = require("http");
const server1 = http.createServer(function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(
    `<html><body><p>My module is:</p><p>${result}</p><h1>Hi there at the frontend</h1></body></html>`
  );
});
server1.listen(3000);

const server2 = http.createServer(function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(
    `<html><body><h1>Today's date is: ${currentDate()}</h1></body></html>`
  );
});
server2.listen(8080);

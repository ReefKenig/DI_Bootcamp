const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const { render } = require("ejs");
const Parser = require("rss-parser");

const RSS_FEED = "https://www.thefactsite.com/feed/";

const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index.ejs");
});

let parser = new Parser();

(async () => {
  let feed = await parser.parseURL("your-rss-feed");
  console.log(feed.title);

  feed.items.forEach((item) => {
    console.log(item.title + ":" + item.link);
  });
})();

app.listen(8080, () => {
  console.log("Listening on 8080");
});

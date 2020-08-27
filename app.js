const fetch = require("node-fetch");
const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/analyze", (req, res) => {
  const searchParams = new URLSearchParams();
  searchParams.append("summoner", encodeURIComponent(req.query.summoner));
  searchParams.append("num_matches", encodeURIComponent(req.query.num_matches));
  fetch(`http://192.168.1.151:5000/analyze?${searchParams.toString()}`)
      .then(result => result.json())
      .then(result => {
        res.send(result);
      })
      .catch(error => {
        console.log("Internal analyze server error: " + error);
      });
});

app.listen(port, () => {
  console.log("App is listening on port " + port);
});

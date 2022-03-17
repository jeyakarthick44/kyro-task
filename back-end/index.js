const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(cors());
app.get("/", function (req, res) {
  res.send("");
});

let jsonFile = require("./data.json");

app.get("/", function (req, res) {
  res.send(jsonFile);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

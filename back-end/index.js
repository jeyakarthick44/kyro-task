const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(cors());

let jsonFile = require("./data.json");

app.get("/", function (req, res) {
  res.json(jsonFile);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());

let jsonFile = require("./data.json");

app.get("/", function (req, res) {
  res.send(jsonFile);
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const app = express();
const port = 5000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

let jsonFile = require("./data.json");

app.get("/", function (req, res) {
  res.json(jsonFile);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("API territorial running");
});

app.listen(3030);
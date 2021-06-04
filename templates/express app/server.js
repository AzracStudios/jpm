const express = require('express')
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./index.html"));
});

app.listen(port, () => console.log(`Server started on port ${port}`));

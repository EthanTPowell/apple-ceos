const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();

// const express = require('express');
// const app = express();
// const path = require("path");
app.use(express.static("./public"));

const port = 3000;
const db = require("./public/db");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});

app.use(require("./routes/ceo-list.js"));

app.use(require("./routes/ceo-details"))

console.log(db);

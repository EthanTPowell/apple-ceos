const express = require("express");
const db = require("../public/db");
const router = express.Router();

router.get("/ceos", (req, res, next) => {
    res.render("./partials/ceo-list.ejs", {
      db: db
  });
});

module.exports = router;
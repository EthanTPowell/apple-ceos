const express = require("express");
const db = require("../public/db");
const router = express.Router();

router.get('/ceos/:slug', (req, res, next) => {
    res.render("../views/partials/ceo-details.ejs", {
        db: db,
        slug: req.params.slug
    })
});

module.exports = router;
require("dotenv").config();

const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("map.ejs", {
        mapkey: process.env.MAPBOX_KEY,
        style: process.env.MAPBOX_STYLE
    });
});

module.exports = router;
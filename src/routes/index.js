require("dotenv").config();

const team1 = require("../views/data/team1.json");

const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("map.ejs", {
        mapkey: process.env.MAPBOX_KEY,
        style: process.env.MAPBOX_STYLE,
        teamone: team1
    });
});

module.exports = router;
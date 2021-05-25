require("dotenv").config();

const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5001;
const routes = require("./routes");

app.use(express.static(path.join(__dirname, "views")));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejs.renderFile);
app.set("view engine", "ejs");

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
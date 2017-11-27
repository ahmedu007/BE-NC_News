if (!process.env.NODE_ENV) process.env.NODE_ENV = "dev";

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const config = require("./config");
const router = require("./router/");
const path = require("path");
const db = config.DB[process.env.NODE_ENV] || process.env.DB;
mongoose.Promise = Promise;

mongoose
  .connect(db, { useMongoClient: true })
  .then(() => console.log("successfully connected to", db))
  .catch(err => console.log("connection failed", err));

app.use(cors());

app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
  res.status(200).render("pages/index");
});

app.use("/api", router);

app.get("*", (req, res) => {
  res.status(404).render("pages/404");
});

module.exports = app;

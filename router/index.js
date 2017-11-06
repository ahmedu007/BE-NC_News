const router = require("express").Router();
const { json } = require("body-parser");
const mongoose = require("mongoose");
const { getAllArticles } = require("../controllers/");

router.get("/articles", getAllArticles);

module.exports = router;

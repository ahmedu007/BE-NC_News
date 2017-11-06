const router = require("express").Router();
const { json } = require("body-parser");
const mongoose = require("mongoose");
const { getAllArticles, getAllTopics } = require("../controllers/");

router.get("/articles", getAllArticles);

router.get("/topics", getAllTopics);

module.exports = router;

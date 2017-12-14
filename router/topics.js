const router = require("express").Router();
const { json } = require("body-parser");
const mongoose = require("mongoose");
const { getAllTopics, getArticlesTopicId } = require("../controllers/");

router.get("/", getAllTopics);

router.get("/topics/:topic/articles", getArticlesTopicId);

module.exports = router;

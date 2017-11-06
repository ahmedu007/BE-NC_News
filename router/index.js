const router = require("express").Router();
const { json } = require("body-parser");
const mongoose = require("mongoose");
const {
  getAllArticles,
  getAllTopics,
  getArticlesTopicId
} = require("../controllers/");

router.get("/articles", getAllArticles);

router.get("/topics", getAllTopics);

router.get("/topics/:topic/articles", getArticlesTopicId);

module.exports = router;

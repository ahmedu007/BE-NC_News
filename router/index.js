const router = require("express").Router();
const { json } = require("body-parser");
const mongoose = require("mongoose");
const articles = require("./articles");
const topics = require("./topics");
const comments = require("./comments");
const {
  getAllArticles,
  getAllTopics,
  getArticlesTopicId,
  getCommentsForArticles,
  postComment,
  voteArticles,
  voteComments,
  deleteComment,
  getUserData,
  getArticleById
} = require("../controllers/");

router.use("/articles", articles);

router.use("/topics", topics);

router.use("/comments", comments);

router.get("/users/:username", getUserData);

module.exports = router;

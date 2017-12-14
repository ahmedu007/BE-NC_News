const router = require("express").Router();
const { json } = require("body-parser");
const mongoose = require("mongoose");
const articles = require("./articles");
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

router.get("/topics", getAllTopics);

router.get("/topics/:topic/articles", getArticlesTopicId);

router.put("/comments/:comment_id", voteComments);

router.delete("/comments/:comment_id", deleteComment);

router.get("/users/:username", getUserData);

module.exports = router;

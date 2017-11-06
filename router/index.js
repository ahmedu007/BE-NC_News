const router = require("express").Router();
const { json } = require("body-parser");
const mongoose = require("mongoose");
const {
  getAllArticles,
  getAllTopics,
  getArticlesTopicId,
  getCommentsForArticles,
  postComment,
  voteArticles,
  voteComments,
  deleteComment
} = require("../controllers/");

router.get("/articles", getAllArticles);

router.get("/topics", getAllTopics);

router.get("/topics/:topic/articles", getArticlesTopicId);

router.get("/articles/:article_id/comments", getCommentsForArticles);

router.post("/articles/:article_id/comments", postComment);

router.put("/articles/:article_id", voteArticles);

router.put("/comments/:comment_id", voteComments);

router.delete("/comments/:comment_id", deleteComment);

module.exports = router;

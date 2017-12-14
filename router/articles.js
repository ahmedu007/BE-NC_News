const router = require("express").Router();
const { json } = require("body-parser");
const mongoose = require("mongoose");
const {
  getAllArticles,
  getArticleById,
  getCommentsForArticles,
  postComment,
  voteArticles
} = require("../controllers/");

router.get("/", getAllArticles);

router.get("/articles/:article_id", getArticleById);

router.get("/articles/:article_id/comments", getCommentsForArticles);

router.post("/articles/:article_id/comments", postComment);

router.put("/articles/:article_id", voteArticles);

module.exports = router;

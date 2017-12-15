const router = require("express").Router();
const {
  getAllArticles,
  getArticleById,
  getCommentsForArticles,
  postComment,
  voteArticles
} = require("../controllers/");

router.get("/", getAllArticles);

router.get("/:article_id", getArticleById);

router.get("/:article_id/comments", getCommentsForArticles);

router.post("/:article_id/comments", postComment);

router.put("/:article_id", voteArticles);

module.exports = router;

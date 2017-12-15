const router = require("express").Router();
const { getAllTopics, getArticlesTopicId } = require("../controllers/");

router.get("/", getAllTopics);

router.get("/:topic/articles", getArticlesTopicId);

module.exports = router;

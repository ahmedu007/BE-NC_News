const router = require("express").Router();
const { getAllTopics, getArticlesTopicId } = require("../controllers/");

router.get("/", getAllTopics);

router.get("/topics/:topic/articles", getArticlesTopicId);

module.exports = router;

const router = require("express").Router();
const articles = require("./articles");
const topics = require("./topics");
const comments = require("./comments");
const { getUserData } = require("../controllers/");

router.use("/articles", articles);

router.use("/topics", topics);

router.use("/comments", comments);

router.get("/users/:username", getUserData);

module.exports = router;

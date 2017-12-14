const router = require("express").Router();
const { voteComments, deleteComment } = require("../controllers/");

router.put("/:comment_id", voteComments);

router.delete("/:comment_id", deleteComment);

module.exports = router;

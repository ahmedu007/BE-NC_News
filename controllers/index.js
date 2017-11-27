const { Article, Topic, Comment, User } = require("../models");
const mongoose = require("mongoose");

function getAllArticles(req, res, next) {
  Article.find()
    .then(articles => {
      return res.status(200).send({ articles });
    })
    .catch(err => next(err));
}

function getAllTopics(req, res, next) {
  Topic.find()
    .then(topics => {
      return res.status(200).send({ topics });
    })
    .catch(err => next(err));
}

function getArticlesTopicId(req, res, next) {
  Article.find({ belongs_to: req.params.topic })
    .then(articles => {
      return res.status(200).send({ articles });
    })
    .catch(err => next(err));
}

function getArticleById(req, res, next) {
  Article.find({ _id: req.params.article_id })
    .then(article => {
      return res.status(200).send({ article });
    })
    .catch(error => next(error));
}

function getCommentsForArticles(req, res, next) {
  Comment.find({ belongs_to: req.params.article_id })
    .then(comment => {
      return res.status(200).send({ comment });
    })
    .catch(err => next(err));
}

function postComment(req, res, next) {
  let comment = new Comments({
    body: req.body.comment,
    belongs_to: req.params.article_id
  });

  comment
    .save()
    .then(comment => {
      res.status(200).send("Posted new comment");
    })
    .catch(err => {
      next(err);
    });
}

function voteArticles(req, res, next) {
  let inc = 0;
  if (req.query.vote === "UP") inc = 1;
  else if (req.query.vote === "DOWN") inc = -1;
  Article.findByIdAndUpdate(
    req.params.article_id,
    { $inc: { votes: inc } },
    { new: true }
  )
    .then(article => res.send(article))
    .catch(err => next(err));
}

function voteComments(req, res, next) {
  let inc = 0;
  if (req.query.vote === "UP") inc = 1;
  else if (req.query.vote === "DOWN") inc = -1;
  Comment.findByIdAndUpdate(
    req.params.comment_id,
    { $inc: { votes: inc } },
    { new: true }
  )
    .then(comment => res.send(comment))
    .catch(err => {
      if (err.name === "CastError") return next({ err, type: 404 });
      next(err);
    });
}

function deleteComment(req, res, next) {
  Comment.findByIdAndRemove({ _id: req.params.comment_id })
    .then(comment => {
      if (!comment) {
        next();
      }
      res.status(200).send("Comment deleted");
    })
    .catch(err => {
      next(err);
    });
}

function getUserData(req, res, next) {
  User.find({ username: req.params.username })
    .then(userinfo => {
      return res.status(200).send({ userinfo });
    })
    .catch(err => next(err));
}

module.exports = {
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
};

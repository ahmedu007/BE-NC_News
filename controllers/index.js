const { Articles, Topics, Comments, Users } = require("../models");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Comment = require("../models/");

function getAllArticles(req, res, next) {
  Articles.find()
    .then(articles => {
      return res.status(200).send({ articles });
    })
    .catch(err => next(err));
}

module.exports = {
  getAllArticles
};

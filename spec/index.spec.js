process.env.NODE_ENV = "test";
const mongoose = require("mongoose");
const { expect } = require("chai");
const request = require("supertest");
const saveTestData = require("../seed/test.seed");
const app = require("../server");
const { User, Article, Comment, Topic } = require("../models/");
const router = require("../router");

describe("api", () => {
  let usefulData;
  beforeEach(() => {
    return mongoose.connection
      .dropDatabase()
      .then(saveTestData)
      .then(data => {
        usefulData = data;
      })
      .catch(err => console.log("error!", err));
  });

  describe("GET /articles", () => {
    it("sends back correct object with a 200 status code", () => {
      return request(app)
        .get("/api/articles")
        .expect(200)
        .then(res => {
          expect(res.body.articles.length).to.equal(2);
        });
    });
    it("sends back correct array of topics with a 200 status code", () => {
      return request(app)
        .get("/api/topics")
        .expect(200)
        .then(res => {
          expect(res.body.topics.length).to.equal(3);
        });
    });
    it("sends back correct articles on the topic with a 200 status code", () => {
      return request(app)
        .get("/api/topics/football/articles")
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an("object");
          expect(res.body.articles).to.be.an("array");
        });
    });
    it("sends back correct comments according to the articles with a 200 status code", () => {
      return request(app)
        .get("/api/articles/59cccb9c63a45a06c008d9d9/comments")
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an("object");
          expect(res.body.comment).to.be.an("array");
        });
    });
    it("sends back correct article according to the ID with a 200 status code", () => {
      return request(app)
        .get("/api/articles/5a0f2cebdd8b1e02e55fd063")
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an("object");
          expect(res.body.article).to.be.an("array");
        });
    });
    it("returns with a 404 if given article id is not found", () => {
      return request(app)
        .get("/api/articles/test")
        .expect(400)
        .then(res => {
          expect(res.status).to.eql(400);
        });
    });
  });

  describe("POST /", function() {
    it("it returns with a status code of 200 if successful", () => {
      const comment = "this is a test comment";
      return request(app)
        .post(`/api/articles/${usefulData.articles[0]._id}/comments`)
        .send({
          comment
        })
        .expect(200);
    });

    it("returns the comment after successful post", () => {
      const comment = "this is a test comment";
      return request(app)
        .post(`/api/articles/${usefulData.articles[0]._id}/comments`)
        .send({
          comment
        })
        .then(res => {
          expect(res.body.comment.body).to.equal(comment);
        });
    });
  });

  describe("PUT /articles/:article_id", () => {
    it("increments votes on articles by 1", () => {
      return request(app)
        .put(`/api/articles/${usefulData.articles[0]._id}?vote=UP`)
        .then(res => {
          expect(res.body.belongs_to).to.equal("cats");
          expect(res.body.votes).to.equal(1);
        });
    });
    it("increments votes on comments by 1", () => {
      return request(app)
        .put(`/api/comments/${usefulData.comments[0]._id}?vote=UP`)
        .then(res => {
          expect(res.body.created_by).to.equal("northcoder");
          expect(res.body.votes).to.equal(1);
        });
    });
  });
  describe("DELETE /comments/:comment_id", () => {
    it("deletes a comment", () => {
      return request(app)
        .del(`/api/comments/${usefulData.comments[0]._id}`)
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an("object");
          expect(res.text).to.be.eql("Comment deleted");
        });
    });
  });
  describe("GET /users/:username", () => {
    it("gets a user by username", () => {
      return request(app)
        .get(`/api/users/${usefulData.user.username}`)
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an("object");
          expect(res.body.userinfo[0].username).to.equal("northcoder");
        });
    });
  });
});

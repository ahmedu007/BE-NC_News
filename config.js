const dotenv = require("dotenv").config();

module.exports = {
  DB: {
    test: "mongodb://localhost/northcoders-news-api-test",
    dev: "mongodb://umair:abcd1234@ds113136.mlab.com:13136/ncnews-be"
  },
  PORT: {
    test: 4090,
    dev: process.env.PORT || 4000
  }
};

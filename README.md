# NC News (Backend)

### by _Umair Ahmed_

To see a deployed version of this, please visit:

```
https://umair-ncnews-be.herokuapp.com/
```

## Getting Started

Please ensure you have the latest version of [NODE](https://nodejs.org/en/)
installed, v8.4 or above.

### Installing

Open your terminal, navigate to the folder where you want to keep the files and
type:

```
git clone https://github.com/ahmedu007/BE-NC_News.git

cd BE-NE_News

npm install

npm start
```

Then open your browser and navigate to `http://localhost:4000/`

#### Seeding the Database

Before running the server or the tests ensure that mongodb is running on your local machine. To seed the database run

```
npm run seed-db
```

and to seed the test database

```
npm run seed-test-db
```

## Running the tests

To run all the tests

```
npm test
```

## Built With

* [ExpressJS](https://expressjs.com/) - The server framework used
* [MongoDB](https://www.mongodb.com/) - The Database for storing information
* [Mongoose](http://mongoosejs.com/) - Mongodb object modeling for node.js

## List of Available Routes

GET

* /api/topics
* /api/articles
* /api/users/:username
* /api/topics/:topic_id/articles
* /api/articles/:article_id/comments

POST

* /api/articles/:article_id/comments

PUT

* /api/articles/:article_id
* /api/comments/:comment_id

DELETE

* /api/comments/:comment_id

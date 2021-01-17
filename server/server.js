//ServerCode

//imports 
const express = require('express');
const app = express();

const parser = require('body-parser');
app.use(parser.json());

const cors = require('cors');
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('roomr_db');
    const usersCollection = db.collection('users');
    const userRouter = createRouter(usersCollection);
    app.use('/api/users', userRouter);
  })
  .catch(console.error);

  app.listen(3000, function () {
    console.log(`Listening on port ${this.address().port}`);
  });
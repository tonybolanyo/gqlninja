const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// connect database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://tony:supersegura@localhost:27017/gqlninja').then(() => {
    'Connected to database successfully'
  }).catch(err => {
    console.log('Error connecting to database.')
  });
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening for requests on port 4000');
});

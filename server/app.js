// Task 0 - initializing the Express server with express-graphql

const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql',graphqlHTTP({
  schema: schema,
  // Enables graphiql
  graphiql: true
}));

app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});
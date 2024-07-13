// Task 0 - initializing the Express server with express-graphql

const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://michaeluser:iPsGLO66yUuZb4i9@michaellgans.h2s6ywa.mongodb.net/?retryWrites=true&w=majority&appName=MichaelLGans')

const app = express();

app.use('/graphql',graphqlHTTP({
  schema: schema,
  // Enables graphiql
  graphiql: true
}));

app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});
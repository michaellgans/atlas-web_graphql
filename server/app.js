// Task 8 - Pull data from MongoDB

const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://michaeluser2:iA69CZi5rD60udA5@michaellgans.h2s6ywa.mongodb.net/?retryWrites=true&w=majority&appName=MichaelLGans', {
  useNewUrlParser: true, // Uses new parser to avoid deprecation warning
  useUnifiedTopology: true // Uses new server discovery engine to avoid deprecation warning
});

const app = express();

mongoose.connection.once('open', () => {
  console.log('connected to MongoDB database');
});

app.use('/graphql',graphqlHTTP({
  schema: schema,
  // Enables graphiql
  graphiql: true
}));

app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});
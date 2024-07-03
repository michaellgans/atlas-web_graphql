# GraphQL API

## Learning Objectives
#### At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- What GraphQL means
  - GraphQL stands for Graph Query Language
  - Allows clients to gather exactly the data they need, which improves the performance of applications.
  - Strongly typed: defines the type of data that can be queried
  - Single endpoint: REST uses multiples, but this only uses one.
  - Self documenting: clients can query the schema and not just data.
  - Uses subscriptions for real time updates.

- What is Graphiql
  - Graphiql (graphical) is an in-browser tool that allows users to test out GraphQL queries, as well as view schema and documentation.
- How to test queries using Graphiql
  - You write the query on the left side and click "Execute" at the top of the editor.  Results are on the right hand side.
#### Example of query:
```
{
  user(id: "1") {
    id
    name
    email
  }
}
```
- What is Apollo
  - Tools for building GraphQL applications
- How to connect to mongoDB
```
const mongoose = require('mongoose');

async function connectToMongoDB() {
  const uri = 'mongodb://localhost:27017/<DATABASE NAME HERE>';

  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Could not connect to MongoDB', err);
  }
}

connectToMongoDB();
```
- How to make queries from React
  - Use Apollo Client to interact with GraphQL server
  - Set Up Apollo Client
  - Write Query
  - Use Query in a React Component
  - Use component in App
- How to make GraphQL server accept request from another server
  - Set up Apollo Server with CORS
  - Send request to GraphQL server

## Requirements

- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension

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
- How to connect to mongoDB
- How to make queries from React
- How to make GraphQL server accept request from another server

## Requirements

- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension

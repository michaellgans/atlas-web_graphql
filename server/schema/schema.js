// Task 2 - Add data array

const { GraphQLSchema, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const _ = require('lodash');

// New Task Type
const TaskType = new GraphQLObjectType({
    // Name is what kind of data is stored.
    // Example: Fruit
    name: 'Task',
    // Details about the data.
    // Example: color, taste, price
    fields: {
        // ID cannot be Null
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: GraphQLString },
        weight: { type: GraphQLInt },
        description: { type: GraphQLString }
    }
});

// Task Aray
// Example: actual fruit inventory
const taskAray = [
    {
        id: '1', 
        title: 'Create your first webpage', 
        weight: 1, 
        description: 'Create your first HTML file 0-index.html with: -Add the doctype on the first line (without any comment) -After the doctype, open and close a html tag Open your file in your browser (the page should be blank)'},
    {
        id: '2', 
        title: 'Structure your webpage', 
        weight: 1, 
        description: 'Copy the content of 0-index.html into 1-index.html Create the head and body sections inside the html tag, create the head and body tags (empty) in this order'}
];

// Root Query - entry point to API
// Can return all of the data or just based on id.
const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // Return more than one task
        tasks: {
            type: new GraphQLList(TaskType),
            resolve(parent, args) {
                return taskAray;
            }
        },
        // Return one task
        task: {
            type: TaskType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parent, args) {
                return _.find(taskAray, { id: args.id });
            }
        }
    }
});


const schema = new GraphQLSchema({
    query: RootQueryType
});

module.exports = schema;

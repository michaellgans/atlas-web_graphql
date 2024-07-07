// Task 0 - object which contains the schema property

const { GraphQLSchema, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

// New Task Type
const TaskType = new GraphQLObjectType({
    name: 'Task',
    fields: {
        // ID cannot be Null
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: GraphQLString },
        weight: { type: GraphQLInt },
        description: { type: GraphQLString }
    }
});

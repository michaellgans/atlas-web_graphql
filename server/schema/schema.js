// Task 8 - Updating resolve functions

const { GraphQLSchema, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLID } = require('graphql');
const _ = require('lodash');
const Project = require('../models/project');
const Task = require('../models/task');

// Project Type
const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        tasks: { 
            type: new GraphQLList(TaskType),
            resolve(parent, args) {
                return Task.find({ 'projectId': parent.id });
            }
        },
        title: { type: GraphQLString },
        weight: { type: GraphQLInt },
        description: { type: GraphQLString }
    })
});

// Task Type
const TaskType = new GraphQLObjectType({
    // Name is what kind of data is stored.
    // Example: Fruit
    name: 'Task',
    // Details about the data.
    // Example: color, taste, price
    fields: () => ({
        // ID cannot be Null
        id: { type: new GraphQLNonNull(GraphQLID) },
        project: { 
            type: ProjectType,
            resolve(parent, args) {
                return Project.find({ 'id': parent.projectId });
            }
        },
        title: { type: GraphQLString },
        weight: { type: GraphQLInt },
        description: { type: GraphQLString }
    })
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addProject: {
            type: ProjectType,
            args: {
                // Non-Null so users can't mutate without
                // missing required fields
                title: { type: new GraphQLNonNull(GraphQLString) },
                weight: { type: new GraphQLNonNull(GraphQLInt) },
                description: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args){
                const newProject = new Project({
                    title: args.title,
                    weight: args.weight,
                    description: args.description
                });
                return newProject.save();
            }
        },
        addTask: {
            type: TaskType,
            args: {
                // Non-Null so users can't mutate without
                // missing required fields
                title: { type: new GraphQLNonNull(GraphQLString) },
                weight: { type: new GraphQLNonNull(GraphQLInt) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                projectId: { type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args){
                const newTask = new Task({
                    title: args.title,
                    weight: args.weight,
                    description: args.description,
                    projectId: args.projectId
                });
                return newTask.save();
            }
        }
    }
});

// Root Query - entry point to Graphiql API
// Can return all of the data or just based on id.
const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // Return more than one task
        tasks: {
            type: new GraphQLList(TaskType),
            resolve(parent, args) {
                return Task.find({ 'id': args.id });
            }
        },
        // Return one task
        task: {
            type: TaskType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Task.find({ 'id': args.id });
            }
        },
        // Return more than one project
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                return Project.find({ 'id': args.id });
            }
        },
        // Return one project
        project: {
            type: ProjectType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Project.find({ 'id': args.id });
            }
        },
        // All Tasks
        allTasks: {
            type: new GraphQLList(TaskType),
            resolve(parent, args) {
                return Task.find({ 'id': args.id });
            }
        },
        // All Projects
        allProjects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                return Task.find({ 'id': args.id });
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: Mutation
});

module.exports = schema;

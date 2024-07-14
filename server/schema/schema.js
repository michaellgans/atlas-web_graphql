// Task 7 - Mutation

const { GraphQLSchema, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLID } = require('graphql');
const _ = require('lodash');
const Project = require('../models/project');
const Project = require('../models/task');

// Mutation Type
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        addProject: {  },
        tasks: { 
            type: new GraphQLList(TaskType),
            resolve(parent, args) {
                return taskAray.filter(task => task.projectId === parent.id.toString());
            }
        },
        title: { type: GraphQLString },
        weight: { type: GraphQLInt },
        description: { type: GraphQLString }
    })
});

// Project Type
const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        tasks: { 
            type: new GraphQLList(TaskType),
            resolve(parent, args) {
                return taskAray.filter(task => task.projectId === parent.id.toString());
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
                const project = _.find(projectAray, { id: parent.projectId.toString() });
                return project;
            }
        },
        title: { type: GraphQLString },
        weight: { type: GraphQLInt },
        description: { type: GraphQLString }
    })
});

// Task Aray Data Sample
// Example: actual fruit inventory
const taskAray = [
    {id: '1', projectId: '1', title: 'Create your first webpage', weight: 1, description: 'Create your first HTML file 0-index.html with: -Add the doctype on the first line (without any comment) -After the doctype, open and close a html tag Open your file in your browser (the page should be blank)'},
    {id: '2', projectId: '1', title: 'Structure your webpage', weight: 1, description: 'Copy the content of 0-index.html into 1-index.html Create the head and body sections inside the html tag, create the head and body tags (empty) in this order'}
];

// Project Aray Data Sample
const projectAray = [
    {id: '1',title: 'Advanced HTML', weight: 1, description: 'Welcome to the Web Stack specialization. The 3 first projects will give you all basics of the Web development: HTML, CSS and Developer tools. In this project, you will learn how to use HTML tags to structure a web page. No CSS, no styling - don’t worry, the final page will be “ugly” it’s normal, it’s not the purpose of this project. Important note: details are important! lowercase vs uppercase / wrong letter… be careful!'},
    {id: '2', title: 'Bootstrap', weight: 1, description: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS and JavaScript design templates for typography, forms, buttons, navigation, and other interface components.'}
];

// Root Query - entry point to Graphiql API
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
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return _.find(taskAray, { id: args.id.toString() });
            }
        },
        // Return more than one project
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                return projectAray;
            }
        },
        // Return one project
        project: {
            type: ProjectType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return _.find(projectAray, { id: args.id.toString() });
            }
        },
        // All Tasks
        allTasks: {
            type: new GraphQLList(TaskType),
            resolve(parent, args) {
                return taskAray;
            }
        },
        // All Projects
        allProjects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                return projectAray;
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: RootQueryType
});

module.exports = schema;

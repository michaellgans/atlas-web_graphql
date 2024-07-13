// Task 6 - Mongoose Models

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: String,
    weight: Number,
    description: String,
    projectId: String
});

module.exports = mongoose.model('Project', projectSchema);
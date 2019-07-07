const mongoose = require('mongoose');


const CommentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        default: 0
    }
})

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    like_count: {
        type: Number,
        default: 0
    },
    user: {
        type: String,
        required: true
    },
    comments: [CommentSchema],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Task = mongoose.model('task', TaskSchema)
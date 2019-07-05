const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likes_count: {
        type: Number,
        default: 0
    },
    user: {
        type: String,
        required: true
    },
    comments: {
        type: Array
    },
    date: {
        type: Date,
        default: Date.now
    }
})
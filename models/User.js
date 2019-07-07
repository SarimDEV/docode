const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 32
    },
    email: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    points: {
        type: Number,
        default: 0
    },
    admin: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)
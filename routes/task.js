const router = require('express').Router();
const verification = require('./privateRoute');

const Task = require('../models/Task');

router.get('/', verification, (req, res) => {
    Task.find()
        .sort({
            date: -1
        })
        .then(entry => res.json(entry))
        .catch(err => res.status(404).json({
            msg: "Unable to find tasks"
        }))
});

router.post('/', verification, (req, res) => {
    const newTask = new Task({
        title: req.body.title,
        description: req.body.description,
        type: req.body.type,
        user: req.user.name
    })
    newTask.save().then(task => res.json(task)).catch(err => res.json(err))
});

router.put('/:id/comment', verification, (req, res) => {
    Task.findOneAndUpdate(req.params.id, {
        $push: {
            comments: {
                name: req.user.name,
                body: req.body.body
            }
        }
    }).then(() => res.json({
        success: true
    }))
        .catch(err => res.status(404).json({
            success: false
        }))
})

router.delete('/:id', verification, (req, res) => {
    if (req.user.admin === true) {
        Task.findById(req.params.id)
            .then(task => task.remove().then(() => res.json({
                success: true
            })))
            .catch(err => res.status(404).json({
                success: false
            }))
    } else {
        res.status(401).json({
            msg: "Not authorized! Must be an Admin."
        })
    }
});

router.post('/:id/like', (req, res) => {
    Entry.findOneAndUpdate(req.params.id, {
        $inc: {
            likes_count: 1
        }
    }).then(() => res.json({
        success: true
    }))
        .catch(err => res.status(404).json({
            success: false
        }))
});

module.exports = router;
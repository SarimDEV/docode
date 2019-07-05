const router = require('express').Router();

const Task = require('../models/Task');

router.get('/', (req, res) => {
    Task.find()
    .sort({ date: -1 })
    .then(entry => res.json(entry))
    .catch(err => res.status(404).json({ msg: "Unable to find tasks"}))
});

router.post('/', (req, res) => {
    const newTask = new Task({
        title: req.body.title,
        description: req.body.description,
        user: req.body.user
    })
    newTask.save().then(task => res.json(task))
});

router.delete('/:id', (req, res) => {
    Entry.findById(req.params.id)
        .then(entry => entry.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
});

router.post('/:id/like', (req, res) => {
    Entry.findOneAndUpdate(req.params.id, { $inc: { likes_count: 1 } }).then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false }))
});

module.exports = router;
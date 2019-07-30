const router = require('express').Router();
const verify = require('./privateRoute');

router.get('/', verify, (req, res) => {
    res.status(200).json({ msg: "potato" })
});

module.exports = router;
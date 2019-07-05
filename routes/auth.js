const router = require('express').Router();

router.get('/register', (req, res) => {
    res.status(200).json({msg: 'nice boss!'})
})

module.exports = router;
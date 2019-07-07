const router = require('express').Router();
const verify = require('./privateRoute');
    
router.get('/', verify, (req, res) => {
    res.json({
        posts: {
            title: "nip",
            body: "nop shouldn't have accessty pop",
            name: req.user.name,
            email: req.user.email,
            admin: req.user.admin
        }
    });
});

module.exports = router;
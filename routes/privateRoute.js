const jwt = require('jsonwebtoken');
const secret = require('../config/keys').secret;

module.exports = function (req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return (res.status(401).json({ msg: "Unauthorized" }))
    }

    try {
        const verified = jwt.verify(token, secret)
        req.user = verified;
        next();
    } catch (err) {
        return (res.status(400).json({ msg: "Invalid Token" }))
    }

}
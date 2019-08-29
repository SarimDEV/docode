const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const {
    registerValidation,
    loginValidation
} = require("../validationMethods");

const secret = require("../config/keys").secret;

router.post("/register", async (req, res) => {
    const {
        error
    } = registerValidation(req.body);
    if (error) {
        return res.status(400).json({
            msg: error.details[0].message
        });
    }

    const emailValidation = await User.findOne({
        email: req.body.email
    });
    if (emailValidation) {
        return res.status(400).json({
            msg: "User with email already exists"
        });
    }

    const nameValidation = await User.findOne({
        name: req.body.name
    });
    if (nameValidation) {
        return res.status(400).json({
            msg: "Username already exists"
        });
    }

    //Password Hashing
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: passwordHash
    });

    newUser
        .save()
        .then(user => res.json(user))
        .catch(err => res.status(404).json({
            msg: err
        }));
});

router.post("/login", async (req, res) => {
    const {
        error
    } = loginValidation(req.body);
    if (error) {
        return res.status(400).json({
            msg: error.details[0].message
        });
    }

    const user = await User.findOne({
        email: req.body.email
    });
    if (!user) {
        return res.status(400).json({
            msg: "Invalid credentals"
        });
    }

    const checkPass = await bcrypt.compare(req.body.password, user.password);
    if (!checkPass) {
        return res.status(400).json({
            msg: "Invalid credentals!"
        });
    }
    const payload = { name: user.name, email: user.email }

    const token = jwt.sign(payload, secret, {
        expiresIn: '1h'
    });
    res.cookie('token', token, { htppOnly: true })
        .sendStatus(200);

});

router.post("/logout", async (req, res) => {
    res.clearCookie('token', { htppOnly: true }).sendStatus(200);

});

router.get("/", (req, res) => {
    User.find()
        .sort({
            date: -1
        })
        .then(entry => res.json(entry))
        .catch(err => res.status(404).json({
            msg: "Unable to find users!"
        }));
});

module.exports = router;
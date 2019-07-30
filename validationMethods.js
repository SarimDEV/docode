const Joi = require('@hapi/joi');


registerValidation = (body) => {
    const validationSchema = {
        name: Joi.string().min(3).required(),
        email: Joi.string().min(3).required().email(),
        password: Joi.string().min(6).required()
    };

    return (Joi.validate(body, validationSchema));
};

loginValidation = (body) => {
    const validationSchema = {
        name: Joi.string().required(),
        password: Joi.string().required()
    };

    return (Joi.validate(body, validationSchema));
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;

const Joi = require("joi");

const { baseValidatorForBody, baseValidatorForParams } = require("./index");

const validateUserSignup = (req, res, next) => {
    const schema = Joi.object({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        phonenumber: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });
    baseValidatorForBody(schema, req, res, next);
};

const validateUserLogin = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });
    baseValidatorForBody(schema, req, res, next);
};

const validateId = (req, res, next) => {
    const schema = Joi.object({
        id: Joi.number().required(),
    });
    baseValidatorForParams(schema, req, res, next);
};

module.exports = {
    validateId,
    validateUserLogin,
    validateUserSignup,
};
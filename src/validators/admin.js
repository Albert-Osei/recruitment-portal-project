const Joi = require("joi");

const { baseValidatorForBody, baseValidatorForParams } = require("./index");

const validateAdminSignup = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        phonenumber: Joi.string().required(),
        country: Joi.string().required(),
        address: Joi.string().required(),
        password: Joi.string().required(),
        image_url: Joi.string(),
    });
    baseValidatorForBody(schema, req, res, next);
};

const validateAdminLogin = (req, res, next) => {
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
    validateAdminLogin,
    validateAdminSignup,
};
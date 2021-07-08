const Joi = require("joi");

const { baseValidatorForBody } = require("./index");

const validateNewStatus = (req, res, next) => {
    const schema = Joi.object({
        status: Joi.string().required(),
        email: Joi.string().email().required()
    });
    baseValidatorForBody(schema, req, res, next);
}

module.exports = {
    validateNewStatus
}
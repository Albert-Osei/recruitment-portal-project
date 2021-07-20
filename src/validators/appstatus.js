const Joi = require("joi");

const { baseValidatorForBody } = require("./index");

const validateNewStatus = (req, res, next) => {
    const schema = Joi.object({
        status: Joi.string(),
        email: Joi.string()
    });
    baseValidatorForBody(schema, req, res, next);
}

module.exports = {
    validateNewStatus
}
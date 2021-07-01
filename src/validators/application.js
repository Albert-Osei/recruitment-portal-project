const Joi = require("joi");

const { baseValidatorForBody } = require("./index");

const validateNewApplication = (req, res, next) => {
    const schema = Joi.object({
        link: Joi.string().required(),
        closure_date: Joi.string().required(),
        batch_id: Joi.string().required(),
        instructions: Joi.string().required(),
        file_path: Joi.string()
    });
    baseValidatorForBody(schema, req, res, next);
};

module.exports = {
    validateNewApplication,
};
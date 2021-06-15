const Joi = require("joi");

const { baseValidatorForBody } = require("./index");

const validateQuizForm = (req, res, next) => {
    const schema = Joi.object({
        question: Joi.string().required,
        alternatives: [
            {
                optionA: Joi.string().required()
            },
            {
                optionB: Joi.string().required()
            },
            {
                optionC: Joi.string().required()
            },
            {
                optionD: Joi.string().required()
            },
            {
                answer: Joi.string().required()
            }
        ],
        file_url: Joi.string()

    });
    baseValidatorForBody(schema, req, res, next);
}

module.exports = {
    validateQuizForm
}

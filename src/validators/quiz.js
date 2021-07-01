const Joi = require("joi");

const { baseValidatorForBody } = require("./index");

const validateNewQuiz = (req, res, next) => {
    const schema = Joi.object({
        question: Joi.string().required(),
        option_a: Joi.string().required(),
        option_b: Joi.string().required(),
        option_c: Joi.string().required(),
        option_d: Joi.string().required(),
        file: Joi.string(),
        answer: Joi.string(),
    });
    baseValidatorForBody(schema, req, res, next);
}

module.exports = {
    validateNewQuiz
}

const Joi = require("joi");

const { baseValidatorForBody } = require("./index");

const validateNewForm = (req, res, next) => {
    const schema = Joi.object({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().required(),
        date_of_birth: Joi.string().required(),
        address: Joi.string().required(),
        university: Joi.string().required(),
        course_of_study: Joi.string().required(),
        cgpa: Joi.string().required(),
        // user_image: Joi.string()
    });
    baseValidatorForBody(schema, req, res, next);
};

module.exports = {
    validateNewForm,
};

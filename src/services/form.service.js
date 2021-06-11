const { runQuery } = require("../config/database.config");
const {
    addFormQuery,
    updateFormQuery,
    findFormByEmail,
} = require("../queries/form");




const addForm = async (body) => {
    const { firstname, lastname, email, date_of_birth, address, university, course_of_study, cgpa, user_image } = body;

    const form = await runQuery(findFormByEmail, [email]);
    if (form.length > 0) {
        throw {
            status: "error",
            message: "Form already filled",
            code: 409,
            data: null,
        };
    }
    const response = await runQuery(addFormQuery, [
        firstname,
        lastname,
        email,
        date_of_birth,
        address,
        university,
        course_of_study,
        cgpa,
        user_image,
    ]);

    return {
        status: "success",
        message: "Form filled successfully",
        code: 201,
        data: response[0],
    };
};

const updateForm = async (body, id) => {
    const { firstname, lastname, email, date_of_birth, address, university, course_of_study, cgpa } = body;

    const form = await runQuery(findFormByEmail, [email]);

    if (form.length === 0) {
        throw {
            status: "error",
            message: "Info not found",
            code: 400,
            data: null,
        };
    };
    const response = await runQuery(updateFormQuery, [
        firstname,
        lastname,
        email,
        date_of_birth,
        address,
        university,
        course_of_study,
        cgpa,
        id
    ]);
    return {
        status: "success",
        message: "Info updated successfully",
        code: 200,
        data: response[0],
    };
};



module.exports = {
    addForm,
    updateForm,
};

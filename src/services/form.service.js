const { runQuery } = require("../config/database.config");
const {
    addFormQuery,
    updateFormQuery,
    findFormByEmail,
    findFormById,
    getAllForms
} = require("../queries/form");

//This is the getForms method
const getForms = async () => {
    const forms = await runQuery(getAllForms);
    return {
        status: 'success',
        code: 200,
        message: 'Forms fetched successfully',
        data: forms,
    }
}

const getOneForm = async (id) => {
    const form = await runQuery(findFormById, [id]);
    if (form.length === 0) {
        throw {
            status: "error",
            message: "Form not found",
            code: 400,
            data: null,
        };
    }
    return {
        status: "success",
        message: "Form returned successfully",
        code: 200,
        data: form,
    };
};

const addForm = async (body) => {
    const { firstname, lastname, email, date_of_birth, address, university, course_of_study, cgpa, files_path } = body;

    const form = await runQuery(findFormByEmail, [email]);
    if (form.length < 0) {
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
        files_path
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
    getForms,
    addForm,
    updateForm,
    getOneForm,
};

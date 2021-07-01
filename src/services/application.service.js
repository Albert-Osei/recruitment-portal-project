const { runQuery } = require("../config/database.config");
const {
    getAllApplications,
    addApplicationQuery,
    findApplicationById,
} = require("../queries/application");

const getApplications = async () => {
    const applications = await runQuery(getAllApplications);
    return {
        status: 'success',
        code: 200,
        message: 'Sparkles! All applications have been fetched successfully',
        data: applications
    }
}

const addApplication = async (body, id) => {
    const { link, closure_date, batch_id, instructions, file_path } = body;

    const application = await runQuery(findApplicationById, [id]);
    if (application.length < 0) {
        throw {
            status: "error",
            message: "application already created",
            code: 409,
            data: null,
        };
    }
    const response = await runQuery(addApplicationQuery, [
        link,
        closure_date,
        batch_id,
        instructions,
        file_path,
    ]);

    return {
        status: "success",
        message: "application added successfully",
        code: 201,
        data: response[0],
    };
};

module.exports = {
    getApplications,
    addApplication,
}
const { runQuery } = require("../config/database.config");
const {
    addStatusQuery,
    updateStatusQuery,
    findStatusById,
    getAllStatuses
} = require("../queries/appstatus");


const getStatuses = async () => {
    const statuses = await runQuery(getAllStatuses);
    return {
        status: 'success',
        code: 200,
        message: 'Statuses fetched successfully',
        data: statuses,
    }
};

const getOneStatus = async (id) => {
    const appStatus = await runQuery(findStatusById, [id]);
    if (appStatus.length === 0) {
        throw {
            status: "error",
            message: "User status not found",
            code: 400,
            data: null,
        };
    }
    return {
        status: "success",
        message: "User status returned successfully",
        code: 200,
        data: appStatus,
    };
};

const addStatus = async (body, id) => {
    const { status, email } = body;
    const appStatus = await runQuery(findStatusById, [id]);
    if (appStatus.length < 0) {
        throw {
            status: "error",
            message: "User status already created",
            code: 409,
            data: null,
        };
    }
    const response = await runQuery(addStatusQuery, [
        status,
        email,
    ]);

    return {
        status: "success",
        message: "User status created successfully",
        code: 201,
        data: response[0],
    };
};

const updateStatus = async (body, id) => {
    const { status, email } = body;

    const appStatus = await runQuery(findStatusById, [id]);

    if (appStatus.length === 0) {
        throw {
            status: "error",
            message: "User status not found",
            code: 400,
            data: null,
        };
    };
    const response = await runQuery(updateStatusQuery, [
        status,
        email,
        id
    ]);
    return {
        status: "success",
        message: "User status updated successfully",
        code: 200,
        data: response[0],
    };
};

module.exports = {
    addStatus,
    getOneStatus,
    getStatuses,
    updateStatus
}
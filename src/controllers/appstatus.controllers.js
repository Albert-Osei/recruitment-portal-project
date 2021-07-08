const StatusService = require("../services/appstatus.service");

const getStatuses = async (req, res, next) => {
    try {
        const response = await StatusService.getStatuses();
        return res.status(response.code).json(response);
    } catch (error) {
        next(error)
    }
}

const getOneStatus = async (req, res, next) => {
    const { id } = req.params;
    try {
        const response = await StatusService.getOneStatus(id);
        return res.status(response.code).json(response);
    } catch (error) {
        next(error);
    }
};

const addStatus = async (req, res, next) => {
    // console.log(req.files);
    // const { id } = req.decoded;
    try {
        const response = await StatusService.addStatus(req.body);
        return res.status(response.code).json(response);
    } catch (error) {
        next(error);
    }
};

const updateStatus = async (req, res, next) => {
    const { id } = req.params;
    try {
        const response = await StatusService.updateStatus(req.body, id);
        return res.status(response.code).json(response);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getStatuses,
    getOneStatus,
    addStatus,
    updateStatus
}
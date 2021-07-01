const ApplicationService = require("../services/application.service");

const getApplications = async (req, res, next) => {
    try {
        const response = await ApplicationService.getApplications();
        return res.status(response.code).json(response);
    } catch (error) {
        next(error)
    }
}

const addApplication = async (req, res, next) => {
    // const { id } = req.decoded;
    console.log(req.file);
    const pathway = req.file.path;
    console.log(pathway);
    try {
        const response = await ApplicationService.addApplication({
            link: req.body.link,
            closure_date: req.body.closure_date,
            batch_id: req.body.batch_id,
            instructions: req.body.instructions,
            file_path: req.file.path
        });
        return res.status(response.code).json(response);
    } catch (error) {
        next(error);
    }
};


module.exports = {
    getApplications,
    addApplication,
};
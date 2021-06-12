const AdminService = require("../services/admin.service");

const loginAdmin = async (req, res, next) => {
    try {
        const response = await AdminService.loginAdmin(req.body);
        return res.status(response.code).json(response);
    } catch (error) {
        next(error);
    }
};

const createAdmin = async (req, res, next) => {
    try {
        const response = await AdminService.createAdmin(req.body);
        return res.status(response.code).json(response);
    } catch (error) {
        next(error);
    }
};

const updateProfile = async (req, res, next) => {
    const { id } = req.params;
    try {
        const response = await AdminService.updateProfile(id, req.body)
        return res.status(response.code).json(response);
    } catch (error) {
        next(error)
    }
}



module.exports = {
    loginAdmin,
    createAdmin,
    updateProfile,
}
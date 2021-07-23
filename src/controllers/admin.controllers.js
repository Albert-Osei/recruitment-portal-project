const AdminService = require("../services/admin.service");

const loginAdmin = async (req, res, next) => {
    try {
        const response = await AdminService.loginAdmin(req.body);
        return res.status(response.code).json(response);
    } catch (error) {
        next(error);
    }
};

const getAllAdmins = async (req, res, next) => {
    try {
        const response = await AdminService.getAdmins();
        return res.status(response.code).json(response);
    } catch (error) {
        next(error);
    }
}

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
    const tracepath = req.file.path;
    console.log(tracepath);
    try {
        const response = await AdminService.updateProfile(id, {
            name: req.body.name,
            phonenumber: req.body.phonenumber,
            country: req.body.country,
            address: req.body.address,
            image_url: req.file.path
        })
        return res.status(response.code).json(response);
    } catch (error) {
        next(error)
    }
}



module.exports = {
    loginAdmin,
    createAdmin,
    updateProfile,
    getAllAdmins,
}
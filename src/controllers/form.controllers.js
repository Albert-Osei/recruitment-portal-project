const FormService = require("../services/form.service");

const getForms = async (req, res, next) => {
    try{
        const response = await FormService.getForms();
        return res.status(response.code).json(response);
    }catch(error){
        next(error)
    }
}

const getOneForm = async (req, res, next) => {
    const { id } = req.params;
    try {
        const response = await FormService.getOneForm(id);
        return res.status(response.code).json(response);
    } catch (error) {
        next(error);
    }
};

const addForm = async (req, res, next) => {
    console.log(req.files);
    // const { id } = req.decoded;
    try {
        const response = await FormService.addForm({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            date_of_birth: req.body.date_of_birth,
            address: req.body.address,
            university: req.body.university,
            course_of_study: req.body.course_of_study,
            cgpa: req.body.cgpa,
            files_path: req.files[0].path
        });
        return res.status(response.code).json(response);
    } catch (error) {
        next(error);
    }
};

const updateForm = async (req, res, next) => {
    const { id } = req.params;
    try {
        const response = await FormService.updateForm(req.body, id);
        return res.status(response.code).json(response);
    } catch (error) {
        next(error);
    }
};




module.exports = {
    getForms,
    addForm,
    updateForm,
    getOneForm,
};

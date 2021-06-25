const FormService = require("../services/form.service");

const getForms = async (req, res, next) => {
    try{
        const response = await FormService.getForms();
        return res.status(response.code).json(response);
    }catch(error){
        next(error)
    }
}

const addForm = async (req, res, next) => {
    // console.log(req.file);
    // const { id } = req.decoded;
    try {
        const response = await FormService.addForm(req.body);
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
    
};

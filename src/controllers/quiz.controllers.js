const QuizService = require("../services/quiz.service");
const cloudinary = require("../utils/cloudinary");



const addQuiz = async (req, res, next) => {
    const { id } = req.decoded;
    try {
        // const result = await cloudinary.uploader.upload(req.file.path);
        // res.json(result);
        const response = await QuizService.addQuiz(req.body, id);
        return res.status(response.code).json(response);
    } catch (error) {
        next(error);
    }
};

const updateQuiz = async (req, res, next) => {
    const { id } = req.params;
    try {
        const response = await QuizService.updateQuiz(req.body, id);
        return res.status(response.code).json(response);
    } catch (error) {
        next(error);
    }
};




module.exports = {
    addQuiz,
    updateQuiz,

};
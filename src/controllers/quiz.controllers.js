const FormService = require("../services/quiz.service");



const addQuiz = async (req, res, next) => {
    const { id } = req.decoded;
    try {
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
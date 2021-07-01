const QuizService = require("../services/quiz.service");
// const cloudinary = require("../utils/cloudinary");

const getQuizes = async (req, res, next) => {
    try {
        const response = await QuizService.getQuizes();
        return res.status(response.code).json(response);
    } catch (error) {
        next(error)       
    }
}


const addQuiz = async (req, res, next) => {
    console.log(req.file)
    const directpath = req.file.path;
    console.log(directpath)
    // const { id } = req.decoded;
    try {
        // const result = await cloudinary.uploader.upload(req.file.path);
        // res.json(result);
        const response = await QuizService.addQuiz({
            question: req.body.question,
            option_a: req.body.option_a,
            option_b: req.body.option_b,
            option_c: req.body.option_c,
            option_d: req.body.option_d,
            answer: req.body.answer,
            file: req.file.path
        }
        );
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
    getQuizes,
    addQuiz,
    updateQuiz,
};
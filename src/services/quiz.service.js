const { runQuery } = require("../config/database.config");
const {
    addQuizQuery,
    updateQuizQuery,
    findQuizById,
} = require("../queries/quiz");




const addQuiz = async (body) => {
    const { question, alternatives, file_url  } = body;

    const quiz = await runQuery(findQuizById, [id]);
    if (quiz.length > 0) {
        throw {
            status: "error",
            message: "question already used",
            code: 409,
            data: null,
        };
    }
    const response = await runQuery(addQuizQuery, [
        question,
        alternatives,
        file_url
    ]);

    return {
        status: "success",
        message: "question added successfully",
        code: 201,
        data: response[0],
    };
};

const updateQuiz = async (body, id) => {
    const { question, alternatives, file_url } = body;

    const quiz = await runQuery(findQuizById, [id]);

    if (quiz.length === 0) {
        throw {
            status: "error",
            message: "question not found",
            code: 400,
            data: null,
        };
    };
    const response = await runQuery(updateQuizQuery, [
        question,
        alternatives,
        file_url
    ]);
    return {
        status: "success",
        message: "question updated successfully",
        code: 200,
        data: response[0],
    };
};



module.exports = {
    addQuiz,
    updateQuiz,
};
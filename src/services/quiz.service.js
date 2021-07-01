const { runQuery } = require("../config/database.config");
const {
    getAllQuizes,
    addQuizQuery,
    updateQuizQuery,
    findQuizById,
    getBatchId,
} = require("../queries/quiz");

// This is the getQuiz method
const getQuizes = async () => {
    const quiz = await runQuery(getAllQuizes);
    return {
        status: 'success',
        code: 200,
        message: 'Sparkles! Quiz questions have been fetched successfully',
        data: quiz
    }
}



const addQuiz = async (body, id) => {
    const { question, option_a, option_b, option_c, option_d, answer, file } = body;

    const quiz = await runQuery(findQuizById, [id]);
    if (quiz.length < 0) {
        throw {
            status: "error",
            message: "question already used",
            code: 409,
            data: null,
        };
    }
    const batches = await runQuery(getBatchId);
    const batch_id = batches.find((element) => element.type === "BatchId1");
    const response = await runQuery(addQuizQuery, [
        question,
        option_a,
        option_b,
        option_c,
        option_d,
        answer,
        file,
        batch_id.id,
    ]);

    return {
        status: "success",
        message: "question added successfully",
        code: 201,
        data: response[0],
    };
};

const updateQuiz = async (body, id) => {
    const { question, option_a, option_b, option_c, option_d, answer, file } = body;

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
        option_a,
        option_b,
        option_c,
        option_d,
        answer,
        file,
    ]);
    return {
        status: "success",
        message: "question updated successfully",
        code: 200,
        data: response[0],
    };
};


module.exports = {
    getQuizes,
    addQuiz,
    updateQuiz,
};
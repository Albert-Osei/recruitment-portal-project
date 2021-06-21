const express = require("express");
const router = express.Router();
const QuizController = require("../controllers/quiz.controllers");
const QuizValidator = require("../validators/quiz");
const { verifyToken } = require("../middlewares/auth.middleware");


router.post("/", verifyToken, QuizValidator.validateNewQuiz, QuizController.addQuiz);

router.put("/:id", verifyToken, QuizController.updateQuiz);


module.exports = router;
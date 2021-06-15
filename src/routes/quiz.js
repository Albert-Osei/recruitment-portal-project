const express = require("express");
const router = express.Router();
const FormController = require("../controllers/quiz.controllers");
const FormValidator = require("../validators/quiz");
const { verifyToken } = require("../middlewares/auth.middleware");


router.post("/", verifyToken, QuizValidator.validateNewQuiz, FormController.addQuiz);

router.put("/:id", verifyToken, QuizController.updateQuiz);


module.exports = router;
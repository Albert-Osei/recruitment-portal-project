const express = require("express");
const router = express.Router();
const QuizController = require("../controllers/quiz.controllers");
const QuizValidator = require("../validators/quiz");
const { verifyAdminToken } = require("../middlewares/auth.middleware");
// const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

router.get("/", QuizController.getQuizes)

router.post("/", upload.single('file'), QuizValidator.validateNewQuiz, QuizController.addQuiz);

router.put("/:id", verifyAdminToken, QuizController.updateQuiz);

router.get("/answers", QuizController.getAnswers);

module.exports = router;
const express = require("express");
const { loginUser, createUser, getallUsers, getSingleUser, saveScores, getAllScores } = require("../controllers/user.controllers");
const { validateUserSignup, validateUserLogin } = require("../validators/user");



const router = express.Router();

router.get("/", getallUsers);
router.get("/:id", getSingleUser);
router.post("/login", validateUserLogin, loginUser);
router.post("/signup", validateUserSignup, createUser);
router.post("/scores", saveScores);
router.get("/scores", getAllScores);


module.exports = router;
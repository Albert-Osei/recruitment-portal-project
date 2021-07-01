const express = require("express");
const router = express.Router();
const FormController = require("../controllers/form.controllers");
const FormValidator = require("../validators/form");
const { verifyToken } = require("../middlewares/auth.middleware");
// const multer = require('multer');

router.get("/", FormController.getForms)

router.post("/", FormValidator.validateNewForm, FormController.addForm);

router.put("/:id", verifyToken, FormController.updateForm);


module.exports = router;
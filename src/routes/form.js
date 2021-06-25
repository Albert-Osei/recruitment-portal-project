const express = require("express");
const router = express.Router();
const FormController = require("../controllers/form.controllers");
const FormValidator = require("../validators/form");
const { verifyToken, verifyAdminToken } = require("../middlewares/auth.middleware");
// const multer = require('multer');

router.get('/', verifyAdminToken, FormController.getForms)

router.post("/", FormValidator.validateNewForm, FormController.addForm);

router.put("/:id", verifyToken, FormController.updateForm);


module.exports = router;
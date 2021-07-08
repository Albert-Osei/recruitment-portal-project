const express = require("express");
const router = express.Router();
const FormController = require("../controllers/form.controllers");
const FormValidator = require("../validators/form");
const { verifyToken } = require("../middlewares/auth.middleware");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/formFiles');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

router.get("/", FormController.getForms);

router.get("/:id", FormController.getOneForm);

router.post("/", upload.array('files_path', 2), FormValidator.validateNewForm, FormController.addForm);

router.put("/:id", verifyToken, FormController.updateForm);


module.exports = router;
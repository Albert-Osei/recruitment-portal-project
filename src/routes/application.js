const express = require("express");
const router = express.Router();
const ApplicationController = require("../controllers/application.controllers");
const ApplicationValidator = require("../validators/application");
// const { verifyAdminToken } = require("../middlewares/auth.middleware");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'src/applicationFiles');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({storage: storage});

router.get("/", ApplicationController.getApplications)

router.post("/", upload.single('file_path'), ApplicationValidator.validateNewApplication, ApplicationController.addApplication);



module.exports = router;
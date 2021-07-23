const express = require("express");
const { loginAdmin, createAdmin, getAllAdmins } = require("../controllers/admin.controllers");
const ProfileController = require('../controllers/admin.controllers');
// const { verifyAdminToken } = require("../middlewares/auth.middleware");
const { validateAdminSignup, validateAdminLogin } = require("../validators/admin");
const multer = require('multer');
const { func } = require("joi");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'src/applicationFiles');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({storage: storage});

const router = express.Router();

router.get("/", getAllAdmins);
router.post("/login", validateAdminLogin, loginAdmin);
router.post("/signup", validateAdminSignup, createAdmin);
router.put("/:id", upload.single('image_url'), ProfileController.updateProfile);


module.exports = router;

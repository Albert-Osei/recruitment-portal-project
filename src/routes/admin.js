const express = require("express");
const { loginAdmin, createAdmin} = require("../controllers/admin.controllers");
const ProfileController = require('../controllers/admin.controllers');
const { verifyAdminToken } = require("../middlewares/auth.middleware");
const { validateAdminSignup, validateAdminLogin } = require("../validators/admin");


const router = express.Router();
router.post("/login", validateAdminLogin, loginAdmin);
router.post("/signup", validateAdminSignup, createAdmin);
router.put("/:id", verifyAdminToken, ProfileController.updateProfile);


module.exports = router;

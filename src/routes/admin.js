const express = require("express");
const { loginAdmin, createAdmin } = require("../controllers/admin.controllers");
const { validateAdminSignup, validateAdminLogin } = require("../validators/admin");


const router = express.Router();
router.post("/login", validateAdminLogin, loginAdmin);
router.post("/signup", validateAdminSignup, createAdmin);


module.exports = router;

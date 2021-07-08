const express = require("express");
const router = express.Router();
const StatusController = require("../controllers/appstatus.controllers");
const StatusValidator = require("../validators/appstatus");
// const { verifyAdminToken } = require("../middlewares/auth.middleware");


router.get("/", StatusController.getStatuses);

router.get("/:id", StatusController.getOneStatus);

router.post("/", StatusValidator.validateNewStatus, StatusController.addStatus);

router.put("/:id", StatusController.updateStatus);


module.exports = router;
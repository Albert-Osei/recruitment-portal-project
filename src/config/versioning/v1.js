const express = require("express");
const api = express.Router();
const forms = require("../../routes/form");
const users = require("../../routes/user");
const admin = require("../../routes/admin");
const quiz = require("../../routes/quiz");
const cors = require('cors');

api.get("/", (req, res) =>
    res.status(200).json({
        status: "success",
        message: "Welcome to Enyata R&A API",
    })
);

api.use(cors());
api.use('/forms', forms);
api.use('/users', users);
api.use('/admin', admin);
api.use('/quiz', quiz);



module.exports = api;
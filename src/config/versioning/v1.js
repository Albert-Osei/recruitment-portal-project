const express = require("express");
const api = express.Router();
const forms = require("../../routes/form");
const users = require("../../routes/user");
const admin = require("../../routes/admin");
const quiz = require("../../routes/quiz");
const application = require("../../routes/application");
const status = require("../../routes/appstatus");
// const cors = require('cors');

api.get("/", (req, res) =>
    res.status(200).json({
        status: "success",
        message: "Welcome to Enyata R&A API",
    })
);

// api.use(cors());
api.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, content-type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Credentials", true);
    if (req.method === "OPTIONS") {
        res.header(
            "Access-Control-Allow-Methods",
            "GET, POST, OPTIONS, PUT, PATCH, DELETE"
        );
        return res.status(200).json({});
    }
    next();
});
api.use('/forms', forms);
api.use('/users', users);
api.use('/admin', admin);
api.use('/quiz', quiz);
api.use('/application', application);
api.use('/status', status)



module.exports = api;
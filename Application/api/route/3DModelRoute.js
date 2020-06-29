'use strict';

const fs = require("fs");

var Model = require('../controller/3DModelController');
var Emailer = require('../controller/EmailController');

module.exports = function (app)
{

    //routes depending on the header

    app.route('').get((_res, res) => {
        const page = fs.readFileSync("webSite/html/index.html", "utf-8");
        res.setHeader("Content-Type", "text/html");
        res.send(page);
    });

    app.route('/login')
        .post(Model.login);

    app.route('/signup')
        .post(Model.signup);

    //handle get put delete
    app.route('/addPatient')
        .post(Model.addPatient)
        .get((_res, res) => {
            const page = fs.readFileSync("addPatient.html", "utf-8");
            res.setHeader("Content-Type", "text/html");
            res.send(page);
        });

    // app.route('/patients')
    //     .get(Model.getPatients);

    app.route('/patients/:id')
        .post(Model.getSinglePatient)
        .patch(Model.updatePatient);

    app.route('/upload')
        .get((_res, res) => {
            const page = fs.readFileSync("webSite/html/upload.html", "utf-8");
            res.setHeader("Content-Type", "text/html");
            res.send(page);
        })
        .post(Model.upload);

    app.route('/home')
        .get((_res, res) => {
            const page = fs.readFileSync("webSite/html/home.html", "utf-8");
            res.setHeader("Content-Type", "text/html");
            res.send(page);
        });

    app.route('/email')
        .post(Emailer.sendMail);
}

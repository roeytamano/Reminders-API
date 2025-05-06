"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var reminder_1 = require("./routers/reminder");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true })); // For form submissions
app.use('/reminders', reminder_1.default);
app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});
app.listen(8000, function () { return console.log('Server started'); });

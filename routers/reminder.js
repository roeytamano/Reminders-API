"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var reminder_1 = require("../models/reminder");
var router = (0, express_1.Router)();
var reminders = [];
router.get('/', function (req, res) {
    res.json(reminders);
});
router.post('/', function (req, res) {
    var title = req.body.title;
    var reminder = new reminder_1.default(title);
    reminders.push(reminder);
    res.status(201).json(reminder);
});
router.put('/:id', function (req, res) {
    var id = req.params.id;
    var isComplete = req.body.isComplete;
    var reminder = reminders.find(function (reminder) { return reminder.id === parseInt(id); });
    if (!reminder) {
        return res.status(404).json({ message: 'Reminder not found' });
    }
    if (typeof isComplete !== 'boolean') {
        return res.status(400).json({ message: 'isComplete must be a boolean' });
    }
    reminder.isComplete = isComplete;
    res.json(reminder);
});
exports.default = router;

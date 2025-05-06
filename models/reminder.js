"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Reminder = /** @class */ (function () {
    function Reminder(title) {
        this.title = title;
        this.id = Date.now();
        this.isComplete = false;
    }
    return Reminder;
}());
exports.default = Reminder;

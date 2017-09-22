"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator_1 = require("./Calculator");
var ProgrammerCalculator = (function (_super) {
    __extends(ProgrammerCalculator, _super);
    function ProgrammerCalculator(base) {
        var _this = _super.call(this) || this;
        _this.base = base;
        if (base <= 0 || base > ProgrammerCalculator.digits.length) {
            throw new Error("base has to be within 0 to 16 inclusive.");
        }
        return _this;
    }
    ProgrammerCalculator.prototype.processDigit = function (digit, currentValue) {
        if (ProgrammerCalculator.digits.indexOf(digit) >= 0) {
            return currentValue * this.base + ProgrammerCalculator.digits.indexOf(digit);
        }
    };
    return ProgrammerCalculator;
}(Calculator_1.Calculator));
ProgrammerCalculator.digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
exports.Calculator = ProgrammerCalculator;
// Also, export the helper function
var Calculator_2 = require("./Calculator");
exports.test = Calculator_2.test;

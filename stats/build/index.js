"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
var matchResult;
(function (matchResult) {
    matchResult["HomeWin"] = "H";
    matchResult["AwayWin"] = "A";
    matchResult["Draw"] = "D";
})(matchResult || (matchResult = {}));
const matches = fs_1.default.readFileSync('football.csv', {
    encoding: 'utf-8'
}).split('\n')
    .map((row) => {
    return row.split(',');
}).map((row) => {
    return [
        row[0],
        row[1]
    ];
});
console.log(matches);

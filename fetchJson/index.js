"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (r) {
    var todo = r.data;
    var id = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    logToDo(id, title, finished);
});
var logToDo = function (id1, title, completed) {
    console.log("\n   The Todo with Id: ".concat(id1, "\n   Title = ").concat(title, " is finished ").concat(completed, "\n   "));
};
var point;
var json = '{"x" :10, "y":20}';
var c = JSON.parse(json);
console.log(c.y);

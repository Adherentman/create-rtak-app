"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Koa = require("koa");
var mongoose = require("mongoose");
var env_1 = require("./env");
var app = new Koa();
var port = 8888;
// 响应
app.use(function (ctx) {
    ctx.body = 'Hello Koa';
});
mongoose.connect(env_1.default.MongoDbUrl);
var db = mongoose.connection;
db.on('error', function (error) {
    console.log(error);
});
db.on('connected', function () {
    console.log('Mongoose connection open to ' + env_1.default.MongoDbUrl);
});
app.listen(port);
console.log("Server is running at port " + port);

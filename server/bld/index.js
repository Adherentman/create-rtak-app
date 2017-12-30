"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Koa = require("koa");
var app = new Koa();
var port = 8888;
// 响应
app.use(function (ctx) {
    ctx.body = 'Hello Koa';
});
app.listen(port);
console.log("Server is running at port " + port);

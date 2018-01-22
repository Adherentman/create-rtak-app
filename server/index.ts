import * as Koa from "koa";

const app = new Koa();

const port: number = 8888;
// 响应
app.use(ctx => {
  ctx.body = "Hello Koa";
});

app.listen(port);
console.log("Server is running at port " + port);

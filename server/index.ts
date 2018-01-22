import * as Koa from "koa";
import * as mongoose from "mongoose";
import env from "./env";

const app = new Koa();

const port: number = 8888;
// 响应
app.use(ctx => {
  ctx.body = "Hello Koa";
});

mongoose.connect(env.MongoDbUrl);
let db = mongoose.connection;

db.on("error", function(error) {
  console.log(error);
});
db.on("connected", function() {
  console.log("Mongoose connection open to " + env.MongoDbUrl);
});

app.listen(port);
console.log("Server is running at port " + port);

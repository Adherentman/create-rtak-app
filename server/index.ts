import * as Koa from "koa";

import * as webpack from "webpack";
import { devMiddleware, hotMiddleware } from "koa-webpack-middleware";
import * as convert from "koa-convert";
var devConfig = require("../../webpack.dev.js");

const app = new Koa();
const compile = webpack(devConfig);

const dwm = devMiddleware(compile, {
  noInfo: false,
  quiet: false,
  lazy: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  publicPath: "/",
  headers: { "X-Custom-Header": "yes" },
  stats: {
    colors: true
  }
});
app.use(convert(dwm));
app.use(
  convert(
    hotMiddleware(compile, {
      // log: console.log,
      // path: '/__webpack_hmr',
      // heartbeat: 10 * 1000
    })
  )
);

const port: number = 8888;
// 响应
app.use(ctx => {
  ctx.body = "Hello Koa";
});

app.listen(port);
console.log("Server is running at port " + port);

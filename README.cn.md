# create-rtak-app

create-rtak-app 意思是 `create-react-typescript-antd-koa-app`.

这个脚手架通过`ebpack-dev-middleware and express` 来实现 HMR 的。

## 快速开始

### 环境配置

* Node.js 版本要求： ^4.8.4 || ^6.10.1 || ^7.10.1 || >= 8.1.4"
* yarn or NPM
  * 如果你用 npm，那么你必须要去删掉 yarn.lock
* Typescript

### 步骤

`$ git clone https://github.com/Adherentman/create-rtak-app.git`

`$ cd create-rtak-app`

`$ yarn`

#### 开发环境

`$ yarn start`

去你的浏览器上访问 localhost: 5555，通常情况来说会帮你自动打开的。

如果你想要换端口号，你需要去根目录下的`webpack.dev.js`修改端口号。

#### 生产环境

`$ yarn build`

#### 后端服务

`$ yarn run-server`

## Build your own project

你从 github 上 clone 下来会有我的`.git`。因为它隐藏着，所以你看不见。如果你计划着要创建属于你自己的项目。你需要去执行以下命令：

`$ rm -rf .git`

## 贡献

欢迎大家 pr 和 stars。

如果有 bug 或者功能，请你通过[issue](https://github.com/Adherentman/create-rtak-app/issues)告诉我

Fork it!

Create your feature branch: git checkout -b my-new-feature

Commit your changes: git commit -am 'Add some feature'

Push to the branch: git push origin my-new-feature

Submit a pull request :D

## 作者

* [github/Adherentman](https://github.com/Adherentman)
* [blog](http://xuzihao.fun)

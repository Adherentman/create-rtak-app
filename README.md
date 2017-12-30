# create-rtak-app

create-rtak-app means `create-react-typescript-antd-koa-app`.

use webpack-dev-middleware and express Realization HMR.

## Quick Start

### Configuration environment

* Node.js Version > 8
* yarn or NPM
  * if you use NPM, you must delete yarn.lock
* Typescript

### Step

`$ git clone https://github.com/Adherentman/create-rtak-app.git`

`$ cd create-rtak-app`

`$ yarn`

#### development environment

`$ yarn start`

Visit localhost:5555 in your browser.

If you want the server to listen to another port, modify the port value in `server.ts` and `webpack.dev.js`.

#### production environment

`$ yarn build`

#### Back end service

`$ yarn run-server`

## Build your own project
You cloned this project from github with a .git directory at the root derectory. The .git directory could probably be invisible to you because it is hidden. If you plan to create your own git project, delete the the .git repository first.

`$ rm -rf .git`

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/Adherentman/parcel-typescript-react-example/issues).

Fork it!
Create your feature branch: git checkout -b my-new-feature
Commit your changes: git commit -am 'Add some feature'
Push to the branch: git push origin my-new-feature
Submit a pull request :D

## Author

* [github/Adherentman](https://github.com/Adherentman)
* [blog](http://xuzihao.fun)
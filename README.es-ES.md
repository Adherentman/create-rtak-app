

# create-rtak-app

![](http://ozar6ogjb.bkt.clouddn.com/%E8%84%9A%E6%89%8B%E6%9E%B6.jpeg)

[中文查看](./README.cn.md)

create-rtak-app significa \`create-react-typescript-antd-koa-app\`.

Utiliza webpack-dev-middleware y express para la implementación de HMR.

Usa React, Typescript, Antd, Koa2 y perttier

## Inicio rápido

### Configuración del entorno

* Versión de Node.js ^4.8.4 || ^6.10.1 || ^7.10.1 || >= 8.1.4"
* yarn o NPM
  * si usas NPM, debes eliminar yarn.lock
* Typescript

### Pasos

`$ git clone https://github.com/Adherentman/create-rtak-app.git`

`$ cd create-rtak-app`

`$ yarn`

#### Entorno de desarrollo

`$ yarn run-start`

Usa koa-webpack-middleware para lograr HMR.

Visita localhost:8888 en tu navegador.

Si deseas que el servidor escuche en otro puerto, modifica el valor del puerto en \`webpack.dev.js\`.

#### Entorno de producción

`$ yarn build`

## Crea tu propio proyecto

Clonaste este proyecto desde GitHub con un directorio .git en el directorio raíz. Es probable que el directorio .git sea invisible para ti porque está oculto. Si planeas crear tu propio proyecto de git, elimina primero el repositorio .git.

`$ rm -rf .git`

## Contribuir

Los pull requests y estrellas son siempre bienvenidos.

Para errores y solicitudes de funciones, [por favor crea un issue](https://github.com/Adherentman/create-rtak-app/issues).

¡Haz un fork!

Crea tu rama de funcionalidad: git checkout -b my-new-feature

Haz commit de tus cambios: git commit -am 'Add some feature'

Envía a la rama: git push origin my-new-feature

Envía un pull request :D

## Autor

* [github/Adherentman](https://github.com/Adherentman)
* [blog](http://xuzihao.fun)

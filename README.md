# ReduxPinBoard
Learning Redux.

## Setup Project

### Setting up Webpack, Babel

```
$ npm init
$ npm i babel-loader babel-core webpack --save-dev
```

Setup projects folder structure and create webpack.config.js

```
$ mkdir src
$ touch src/main.js
$ mkdir test
$ mkdir dist
$ touch webpack.config.js
```

Installing presets:

```
$ npm i babel-preset-react babel-preset-es2015 --save-dev
$ touch .babelrc
```

.babelrc content:

```
{
  "presets": ["react", "es2015"]
}
```

Install webpack dev server to run locally:

```
$ npm i webpack-dev-server --save-dev
```

Webpack contet: See webpack.config.js

package.json scripts add:

```
"scripts": {
    "dev": "webpack-dev-server --port 3000 --devtool eval --progress --colors --hot --content-base dist",
    "build": "webpack",
    ...
}
```

### React and Redux

Install react related packages:

```
$ npm i react react-dom redux react-redux react-router immutable --save
$ touch dist/index.html
```



## The API

https://engineering.pinterest.com/blog/start-building-pinterest-api

https://developers.pinterest.com/
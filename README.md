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
$ touch src/app.js
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

Create the root component:

```
$ mkdir src/components
$ touch src/components/Application.js
$ mkdir src/containers
$ mkdir src/reducers
$ touch src/reducers/index.js
```

#### Basic content

src/components/Application.js

```js
import React from 'react';

const Application = () => (
  <div>
    <h1>My Board</h1>
  </div>
);

export default Application;
```

src/reducers/pins.js:

```js
const pins = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default pins;
```

src/reducers/index.js:

```js
import { combineReducers } from 'redux';
import pins from './pins';
const boardApp = combineReducers({
  pins
});
export default boardApp;

```

src/app.js:

```js
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import boardApp from './reducers/index';
import Application from './components/Application';

let store = createStore(boardApp);

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root')
);
```


## The API

https://engineering.pinterest.com/blog/start-building-pinterest-api

https://developers.pinterest.com/
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

Running development mode: preview is available at http://localhost:3000

```
$ npm run dev
```

### Setting up Mocha, Chai, Sinon, and Enzyme

```
$ npm i mocha chai sinon --save-dev
$ npm i babel-register --save-dev
```

Create Test helper file:

```
$ touch test/testHelper.js
```

Include testing scripts to package.json:

```
"test": "mocha --compilers js:babel-register --require ./test/test_helper.js --recursive",
"test:watch": "npm test -- --watch",
```

### Enzyme

```
$ npm i enzyme react-addons-test-utils --save-dev
```

### Setting up Karma

```
$ npm i karma karma-chai karma-mocha karma-webpack --save-dev
$ npm i phantomjs-prebuilt --save-dev
$ npm i karma-sourcemap-loader karma-phantomjs-launcher --save-dev
$ npm i karma-spec-reporter --save-dev

$ npm i babel-polyfill phantomjs-polyfill --save-dev
$ npm i yargs --save-dev
```

Replace test scripts to use karma:

```
"test": "node_modules/.bin/karma start karma.config.js",
"test:dev": "npm run test -- --watch",
```

Create karma.config.js

Create test file:

```
$ mkdir test/components/                
$ touch test/components/Application.spec.js
```

Test content:

```js
import React from 'react';
import { shallow } from 'enzyme';
import Application from 'components/Application';

describe('Application', () => {
  it ('should mount', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.type()).to.equal('div');
  });
});
```

## The API

https://engineering.pinterest.com/blog/start-building-pinterest-api

https://developers.pinterest.com/
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

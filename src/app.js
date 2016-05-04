import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import boardApp from './reducers/index';
import Application from './components/Application';
import { PIN_APP } from './util/config';

let store = createStore(boardApp);

// Initialize Pinterest SDK
//PDK.init({
//  appId: PIN_APP,
//  cookie: true
//});

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root')
);

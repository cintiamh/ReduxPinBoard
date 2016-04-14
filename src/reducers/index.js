import { combineReducers } from 'redux';
import pins from './pins';

const boardApp = combineReducers({
  pins
});

export default boardApp;

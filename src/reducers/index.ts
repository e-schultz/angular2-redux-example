import { combineReducers } from 'redux';
import counter from './counter';
import session from './session';

export default combineReducers({
  counter,
  session
});

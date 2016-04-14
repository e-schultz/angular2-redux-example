import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  LOGOUT_USER
} from '../constants';
import { fromJS, Map } from 'immutable';

export interface CounterState extends Map<string, any> {

}
const INITIAL_STATE = fromJS({
  count: 0,
});

function counterReducer(state: CounterState = INITIAL_STATE,
  action = { type: '' }): CounterState {
  switch (action.type) {

    case INCREMENT_COUNTER:
      return state.update('count', (value) => value + 1);

    case DECREMENT_COUNTER:
      return state.update('count', (value) => value - 1);

    case LOGOUT_USER:
      return state.merge(INITIAL_STATE);

    default:
      return state;
  }
}


export default counterReducer;

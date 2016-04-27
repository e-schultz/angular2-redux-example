import { combineReducers } from 'redux';
import counter from './counter';
import session  from './session';
import todos from './todos';
import filter from './filter';
import { CounterState } from './counter';
import { SessionState } from './session';
import { FilterState } from './filter';
import { TodoState } from './todos';
export default combineReducers({
  counter,
  session,
  todos,
  filter
});


export interface AppState {
  counter: CounterState;
  session: SessionState;
  todos: TodoState;
  filter: FilterState;
}

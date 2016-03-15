import {applyMiddleware, compose, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducers/index';

const middlewares = [ReduxThunk];

export function mockStore({ getState, dispatch }) {
  function createStore() {
    return { getState, dispatch };
  }

  const finalCreateStore = applyMiddleware(
    ...middlewares
  )(createStore);

  return finalCreateStore();
}

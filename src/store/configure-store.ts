///<reference path="./dev-types.d.ts"/>

import {createStore, applyMiddleware, compose} from 'redux';
import {fromJS} from 'immutable';
import ReduxThunk from 'redux-thunk';
import logger from './configure-logger';
import promiseMiddleware from '../middleware/promise-middleware';
import reducer from '../reducers/index';
const persistState = require('redux-localstorage');

const storageConfig = {
  key: 'angular2-redux-seed',
  serialize: (store) => {
    return store && store.session ?
      JSON.stringify(store.session.toJS()) : store;
  },
  deserialize: (state) => ({
    session: state ? fromJS(JSON.parse(state)) : fromJS({}),
  }),
};

function _getMiddleware() {
  let middleware = [promiseMiddleware, ReduxThunk];

  if (__DEV__) {
    middleware = [...middleware, logger];
  }

  return applyMiddleware(...middleware);
}

function _getEnhancers() {
  let enhancers = [persistState('session', storageConfig)];

  if (__DEV__ && window.devToolsExtension) {
    enhancers = [...enhancers, window.devToolsExtension() ];
  }

  return enhancers;
}

const finalCreateStore = compose(
  _getMiddleware(),
  ..._getEnhancers()
)(createStore);

export default () => {
  return finalCreateStore(reducer);
}

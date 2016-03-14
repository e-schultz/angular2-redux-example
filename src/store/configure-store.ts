///<reference path="./dev-types.d.ts"/>

import {createStore, applyMiddleware, compose} from 'redux';
import logger from './configure-logger';
const thunk = require('redux-thunk').default;
import promiseMiddleware from '../middleware/promise-middleware';
import reducer from '../reducers/index';


const finalCreateStore = compose(
  _getMiddleware(),
  ..._getEnhancers()
)(createStore);

function _getMiddleware() {
  let middleware = [promiseMiddleware, thunk];


  if (__DEV__) {
    middleware = [...middleware, logger];
  }

  return applyMiddleware(...middleware);
}

function _getEnhancers() {
  let enhancers = [];

  if (__DEV__ && window.devToolsExtension) {
    enhancers = [...enhancers, window.devToolsExtension() ];
  }

  return enhancers;
}

export default () => {
  return finalCreateStore(reducer);
}

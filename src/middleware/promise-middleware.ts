import isPromise from '../utils/is-promise';
const R = require('ramda');

export default function promiseMiddleware({ dispatch }) {
  return next => action => {
    if (!isPromise(action.payload)) {
      return next(action);
    }

    const { types, payload, meta } = action;
    const { promise, data } = payload;
    const [ PENDING, FULFILLED, REJECTED ] = types;

   /**
    * Dispatch the pending action
    */
    let pendingAction = {type: PENDING, payload: null, meta: null};
    if (R.isEmpty(data)) {
      pendingAction.payload = data;
    }
    if (R.isEmpty(meta)) {
      pendingAction.meta = meta;
    }
    dispatch(pendingAction);


    /**
     * If successful, dispatch the fulfilled action, otherwise dispatch
     * rejected action.
     */
    return promise.then(
      result => {
        dispatch({
          type: FULFILLED,
          payload: result,
          meta,
        });
      },
      error => {
        dispatch({
          type: REJECTED,
          payload: error,
          meta,
        });
      }
    );
  };
}

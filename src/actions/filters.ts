import * as types from '../constants';

export function filterCompleted() {
  return { type: types.FILTER_COMPLETED };
}

export function filterUser(user) {
  return { type: types.FILTER_USER, payload: user };
}


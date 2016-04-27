import {
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
} from '../constants';

import { fromJS, Map } from 'immutable';

const INITIAL_STATE = fromJS({
  token: null,
  user: {},
  hasError: false,
  isLoading: false,
});
export interface SessionState extends Map<string, any> { };

function sessionReducer(state: SessionState = INITIAL_STATE,
  action: any = { type: '' }): SessionState {
  switch (action.type) {

  case LOGIN_USER_PENDING:
    return state.merge(fromJS({
      token: null,
      user: {},
      hasError: false,
      isLoading: true,
    }));

  case LOGIN_USER_SUCCESS:
    return state.merge(fromJS({
      token: action.payload.token,
      user: action.payload.profile,
      hasError: false,
      isLoading: false,
    }));

  case LOGIN_USER_ERROR:
    return state.merge(fromJS({
      hasError: true,
      isLoading: false,
    }));

  case LOGOUT_USER:
    return state.merge(INITIAL_STATE);

  default:
    return state;
  }
}

export default sessionReducer;

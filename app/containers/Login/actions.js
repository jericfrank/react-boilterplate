/*
 *
 * Login actions
 *
 */

import {
  DEFAULT_ACTION,
  LOGIN_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loginSuccess () {
  return {
    type : LOGIN_SUCCESS
  }
}

export function loginError ( { errorMsg }  ) {
  return {
    type    : LOGIN_ERROR,
    payload : {
      errorMsg
    }
  };
}

export function loginSubmit ( userObj ) {
  return {
    type    : LOGIN_SUBMIT,
    payload : {
      UserName : userObj.username,
      Password : userObj.password
    }
  }
}

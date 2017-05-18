/*
 *
 * Login constants
 *
 */

export const DEFAULT_ACTION = 'app/Login/DEFAULT_ACTION';
export const LOGIN_SUBMIT = 'app/Login/LOGIN_SUBMIT';
export const LOGIN_SUCCESS = 'app/Login/LOGIN_SUCCESS';
export const AUTH_USER    = 'app/Login/AUTH_USER';
export const LOGIN_ERROR  = 'app/Login/LOGIN_ERROR';
export const RESET_LOGIN  = 'app/Login/RESET_LOGIN';

export const FIELDS = {
  username : {
    type     : 'text',
    label    : 'Username',
    required : true
  },
  password : {
    type     : 'password',
    label    : 'Password',
    required : true
  }
}

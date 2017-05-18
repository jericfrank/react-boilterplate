/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './constants';

const initialState = fromJS( {
  loggingIn : false,
  loggedIn  : false,
  errorMsg  : ''
});

function loginReducer(state = initialState, action) {
  switch (action.type) {

    case LOGIN_SUBMIT:
      return state
        .set( 'errorMsg', '' )
        .set( 'loggingIn', true )
        .set( 'loggedIn', false );

    case LOGIN_SUCCESS :
      return state
        .set( 'errorMsg', '' )
        .set( 'loggingIn', false )
        .set( 'loggedIn', true );

    case LOGIN_ERROR :
      return state
        .set( 'errorMsg', action.payload.errorMsg )
        .set( 'loggingIn', false )
        .set( 'loggedIn', false );

    default:
      return state;
  }
}

export default loginReducer;

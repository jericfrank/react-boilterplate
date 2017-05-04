/*
 *
 * UsersPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR
} from './constants';

const initialState = fromJS( {
  loading : false,
  error   : false,
  users   : false
});

function homePageReducer ( state = initialState, action ) {
  switch ( action.type ) {
  case LOAD_USERS:
    return state
      .set( 'loading', true )
      .set( 'error', false );

  case LOAD_USERS_SUCCESS:
    return state
      .set( 'users', action.users )
      .set( 'loading', false )
      .set( 'error', false )

  case LOAD_USERS_ERROR:
    return state
      .set( 'error', action.error )
      .set( 'users', false )
      .set( 'loading', false );

  default:
    return state;
  }
}

export default homePageReducer;

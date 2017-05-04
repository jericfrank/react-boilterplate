/*
 *
 * UsersPage actions
 *
 */

import _ from 'lodash';
import {
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR
} from './constants';

export function loadUsers () {
  return {
    type : LOAD_USERS
  };
}

export function usersLoaded ( users ) {
  return {
    type  : LOAD_USERS_SUCCESS,
    users : users
  }
}

export function usersLoadingError ( error ) {
  return {
    type : LOAD_USERS_ERROR,
    error
  }
}

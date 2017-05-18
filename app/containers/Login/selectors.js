import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectLoginDomain = (state) => state.get('login');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Login
 */

const makeSelectLoggingIn = () => createSelector(
  selectLoginDomain,
  ( substate ) => substate.get( 'loggingIn' )
);

const makeSelectLogin = () => createSelector(
  selectLoginDomain,
  (substate) => substate.toJS()
);

const makeSelectLoginError = () => createSelector(
  selectLoginDomain,
  ( substate ) => substate.get( 'errorMsg' )
);

export {
  makeSelectLogin,
  selectLoginDomain,
  makeSelectLoggingIn,
  makeSelectLoginError
};

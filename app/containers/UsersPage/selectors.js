import { createSelector } from 'reselect';

/**
 * Direct selector to the usersPage state domain
 */
const selectUsersPageDomain = ( state ) => state.get( 'usersPage' );

/**
 * Other specific selectors
 */
const makeSelectUsersLoading = () => createSelector(
  selectUsersPageDomain,
  ( substate ) => substate.get( 'loading' )
);

const makeSelectUsers = () => createSelector(
  selectUsersPageDomain,
  ( substate ) => substate.get( 'users' )
);

const makeSelectUsersError = () => createSelector(
  selectUsersPageDomain,
  ( substate ) => substate.get( 'error' )
);

export {
  makeSelectUsers,
  makeSelectUsersError,
  makeSelectUsersLoading
};

import { createSelector } from 'reselect';

// makeSelectLocationState expects a plain JS object for the routing state
const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const selectGlobal = ( state ) => state.get( 'global' );

const selectIsAuthenticated = () => createSelector(
  selectGlobal,
  ( substate ) => substate.get( 'authenticated' )
);

export {
  selectGlobal,
  selectIsAuthenticated,
  makeSelectLocationState
};

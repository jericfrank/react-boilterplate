import { fromJS } from 'immutable';

const initialState = fromJS( {
  authenticated : false
} );

function authReducer ( state = initialState, action ) {
  switch ( action.type ) {
  default :
    return state;
  }
}

export default authReducer;

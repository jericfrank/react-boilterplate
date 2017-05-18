import { put, call, fork, takeLatest } from 'redux-saga/effects';

import { postRequest } from 'utils/request';

import { LOGIN_SUBMIT } from './constants';

import { loginSuccess, loginError } from './actions';

// Individual exports for testing
export function* watchLoginSubmit() {
  const watcher = yield fork( takeLatest, LOGIN_SUBMIT, loginSubmit );
  // See example in containers/HomePage/sagas.js
}

export function* loginSubmit ( { payload } ) {
  try {
    const response = yield call( postRequest,'/auth/login', payload );
    console.log( response );
    // const { User }       = response.data;
    // User.authenticated   = true;
    // const { Privileges } = response.data.User.Profile;
    // const encrypt        = CryptoJS.AES.encrypt( JSON.stringify( User ), response.data.Token );

    // localStorage.setItem( 'greasyUser', encrypt );

    // yield call( handleJwtToken, response )
    // yield put( setCurrentUser( User, true ) );
    // yield put( setCurrentUserPrivileges( Privileges ) );
    // yield put( loginSuccess() );
    // yield put( push( '/' ) );
  } catch ( err ) {
    yield put( loginError( { errorMsg : err.error } ) );
  }
}

// All sagas to be loaded
export default [
  watchLoginSubmit,
];

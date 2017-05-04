import _ from 'lodash';
import { take, call, put, cancel, takeEvery, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { getRequest } from 'utils/request';
import { LOAD_USERS } from './constants';
import {
  usersLoaded,
  usersLoadingError,
  changeStatusSucceeded,
  changeStatusFailed
} from './actions';

// Individual exports for testing
export function* getUsers () {
  try {
    const usersRes = yield call( getRequest, '/users' );
    // const stationsRes = yield call( getRequest, '/stations' );
    // const profilesRes = yield call( getRequest, '/profiles' );

    const users = usersRes;

    // let users = usersRes.data.map( ( user ) => ( {
    //   ...user,
    //   station : _.find( stationsRes.data, ( { Id } ) => Id === user.StationId ),
    //   profile : _.find( profilesRes.data, ( { Id } ) => Id === user.ProfileId )
    // } ) );
    // users = _.filter( users, ( { profile } ) => profile.Name !== 'admin' );

    yield put( usersLoaded( users ) );
  } catch ( err ) {
    yield put( usersLoadingError( err ) );
  }
}

export function* usersCollection () {
  const watcher = yield takeLatest( LOAD_USERS, getUsers );

  yield take( LOCATION_CHANGE );
  yield cancel( watcher );
}

// All sagas to be loaded
export default [
  usersCollection
];

/*
 *
 * UsersPage
 *
 */

import React, { PropTypes , PureComponent } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { loadUsers } from './actions';
import { makeSelectUsers, makeSelectUsersError, makeSelectUsersLoading } from './selectors';

import UsersList from '../../components/UsersList';

class UsersPage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount () {
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        <h1>
          UsersPage
        </h1>
        <UsersList {...this.props}/>
      </div>
    );
  }
}

UsersPage.propTypes = {
  getUsers : PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector( {
  users   : makeSelectUsers(),
  error   : makeSelectUsersError(),
  loading : makeSelectUsersLoading()
});

function mapDispatchToProps ( dispatch ) {
  return {
    getUsers : () => {
      dispatch( loadUsers() );
    }
  };
}

export default connect( mapStateToProps, mapDispatchToProps )( UsersPage );

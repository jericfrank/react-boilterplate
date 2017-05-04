/*
 *
 * UsersPage
 *
 */

import React, { PropTypes , PureComponent } from 'react';

class UsersList extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor ( props ) {
    super( props );

    this.renderList = this.renderList.bind( this );
  }

  renderList () {
    const { loading, error, users } = this.props;

    if ( loading ) {
      return 'loading....';
    }

    if ( error ) {
      return 'Something went wrong, please try again later!';
    }

    if ( ( users || [ ] ).length ) {
      return users.map( ( user, index ) => {
        return (
          <li key={index}>
            {user.name}
          </li>
        );
      });
    }
  }

  render() {
    return (
      <div>
        UsersList
        {this.renderList()}
      </div>
    );
  }
}

UsersList.propTypes = {
  loading            : React.PropTypes.bool,
  error              : React.PropTypes.any,
  users              : React.PropTypes.oneOfType( [
    React.PropTypes.array,
    React.PropTypes.bool
  ] )
};

export default UsersList;

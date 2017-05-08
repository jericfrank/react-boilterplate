/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectLogin from './selectors';
import { Field, reduxForm } from 'redux-form/immutable';
import _ from 'lodash';

import { FIELDS } from './constants';

export class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderField ( field, key ) {
    return (
      <Field
        placeholder={key}
        key={key}
        name={key}
        type={field.type}
        component="input"
        className="margin-left-10 margin-right-10"
      />
    );
  }

  render() {
    const form = (
      <form>
        { _.map( FIELDS, this.renderField )}
      </form>
    );

    return (
      <div>
        <Helmet
          title="Login"
          meta={[
            { name: 'description', content: 'Description of Login' },
          ]}
        />
        {form}
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

Login = reduxForm( { // eslint-disable-line no-class-assign
  form : 'login'
} )( Login );

export default connect(mapStateToProps, mapDispatchToProps)(Login);

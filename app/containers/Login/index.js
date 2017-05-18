/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { makeSelectLoginError, makeSelectLogin, makeSelectLoggingIn } from './selectors';
import { Field, reduxForm } from 'redux-form/immutable';
import _ from 'lodash';

import { loginSubmit } from './actions';
import { FIELDS } from './constants';
import validate from './validate';

export class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor () {
    super();

    this.handleFormSubmit = this.handleFormSubmit.bind( this );
  }

  handleFormSubmit ( values ) {
    const user = {
      username : values.get( 'username' ),
      password : values.get( 'password' )
    };

    this.props.loginSubmit( user );
  }

  renderField ( field, key ) {
    const renderField = ({ input, placeholder, label, type, meta: { touched, error } }) => (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} type={type} placeholder={placeholder}/>
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    );

    return (
      <Field
        placeholder={key}
        key={key}
        name={key}
        type={field.type}
        component={renderField}
        className=""
      />
    );
  }

  render() {
    const { handleSubmit, loggingIn, errorMsg } = this.props;

    const form = (
      <form onSubmit={ handleSubmit(this.handleFormSubmit) }>
        { _.map( FIELDS, this.renderField )}
        <input type="submit" />
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
        {errorMsg ? errorMsg : ''}
        {loggingIn ? 'logging in..' : form}
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  loggingIn: makeSelectLoggingIn(),
  errorMsg: makeSelectLoginError()
});

function mapDispatchToProps(dispatch) {
  return {
    loginSubmit : ( user ) => dispatch( loginSubmit( user ) )
  };
}

Login.propTypes = {
  loginSubmit  : React.PropTypes.func,
  handleSubmit : React.PropTypes.func
};

Login = reduxForm( { // eslint-disable-line no-class-assign
  form : 'login',
  validate
} )( Login );

export default connect(mapStateToProps, mapDispatchToProps)(Login);

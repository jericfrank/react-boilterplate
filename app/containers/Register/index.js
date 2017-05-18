/*
 *
 * Register
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectRegister from './selectors';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form/immutable';

import { FIELDS } from './constants';

export class Register extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderField ( field, key ) {
    return (
      <Field
        placeholder={key}
        key={key}
        name={key}
        type={field.type}
        component="input"
        className=""
      />
    );
  }

  render() {
    const form = (
      <form>
        { _.map( FIELDS, this.renderField )}
        <input type="submit" />
      </form>
    );

    return (
      <div>
        <Helmet
          title="Register"
          meta={[
            { name: 'description', content: 'Description of Register' },
          ]}
        />
        {form}
      </div>
    );
  }
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Register: makeSelectRegister(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

Register = reduxForm( { // eslint-disable-line no-class-assign
  form : 'register'
} )( Register );

export default connect(mapStateToProps, mapDispatchToProps)(Register);

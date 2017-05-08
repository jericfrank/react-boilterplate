import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

export default function ( ComposedComponent ) {
  class Authentication extends Component {
    componentWillMount () {
      browserHistory.push( '/login' );
    }

    render () {
      return <ComposedComponent {...this.props} />
    }
  }

  return Authentication;
}

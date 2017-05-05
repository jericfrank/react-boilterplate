/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import NavBar from '../../components/NavBar';

import { SIDE_NAVS } from './constants';

import {
  selectIsAuthenticated
} from './selectors';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  renderNavBars() {
    const { isAuthenticated } = this.props;

    if( isAuthenticated ) {
      return (
        <NavBar navs={SIDE_NAVS} />
      );
    }

    return null;
  }

  render() {
    return (
      <div>
        {this.renderNavBars()}
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              {React.Children.toArray(this.props.children)}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  isAuthenticated : PropTypes.bool
};

const mapStateToProps = createStructuredSelector( {
  isAuthenticated : selectIsAuthenticated()
});

export function mapDispatchToProps ( dispatch ) {
  return {
    dispatch
  };
}

export default connect( mapStateToProps, mapDispatchToProps )( App );

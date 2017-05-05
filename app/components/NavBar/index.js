/* eslint-disable react/no-danger */
import React, { PropTypes , PureComponent } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { browserHistory } from 'react-router'

class NavBar extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor ( props ) {
    super( props );

    this.renderMainNav = this.renderMainNav.bind(this);
    this.onNavigate = this.onNavigate.bind(this);
  }

  onNavigate(nav) {
    browserHistory.push( nav.path );
  }

  renderMainNav (nav, index) {
    return (
      <NavItem
        eventKey={index}
        key={index}
        href="#"
        onClick={() => this.onNavigate( nav )}
      >
        {nav.name}
      </NavItem>
    );
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">LOGO</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {this.props.navs.map( this.renderMainNav )}
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Logout</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

NavBar.propTypes = {
  navs: React.PropTypes.array
};

export default NavBar;

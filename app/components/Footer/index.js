/* eslint-disable react/no-danger */
import React from 'react';
import { Button } from 'react-bootstrap';

function Footer(props) {
  return (
    <Button
      bsStyle="primary"
    >
      {props.title}
    </Button>
  );
}

Footer.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Footer;

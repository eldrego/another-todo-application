import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import titleMapper from '../../utils/titleMapper';

const Header = ({ location: { pathname } }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <header className="header">
            <h1>{titleMapper(pathname)}</h1>
          </header>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired
};

export default withRouter(Header);

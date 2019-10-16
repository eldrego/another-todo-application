import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import Footer from './common/Footer';

const AppLayout = (props) => {
  const { children } = props;
  return (
    <div className="content">
      <main>
        <Header />
        {children}
      </main>
      <Footer />
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.shape({}).isRequired
};

export default AppLayout;

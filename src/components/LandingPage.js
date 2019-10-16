import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container">
      Landing page
      <Link to="/todoapp">Forgot your Password?</Link>
      <Link to="/newsapp">Forgot your Password?</Link>
    </div>
  );
};

export default LandingPage;

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/assets/logo.png" alt="ACT Logo" />
      </div>
      <div className="navbar-profile">
        <img src="/assets/images.jpeg" alt="Profile" />
        <span>casper@act.com</span>
      </div>
    </nav>
  );
};

export default Navbar;

// components/Navbar.js
import React from 'react';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-left">
        <span className="logo">Bike Riders</span>
      </div>
      <div className="navbar-right">
        <ul>
          <li>Home</li>
          <li>Register</li>
          <li>Sign In</li>
          <li>About Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

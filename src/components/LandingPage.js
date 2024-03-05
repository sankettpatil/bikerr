// LandingPage.js
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      {/* First Division */}
      <section className="first-division">
        <h1>Want bike enthusiasts same as you?</h1>
        <p>Join our community of bike enthusiasts and embark on unforgettable journeys.</p>
        <div>
          <button className="cta-button">Register</button>
          <button className="cta-button">Sign In</button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

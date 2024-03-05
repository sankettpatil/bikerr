// SecondHomepage.js
import React from 'react';
import Navbar from './Navbar';
import './styles/Main.css';

const SecondHomepage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      

      {/* First Division - Headlines and News Cards */}
      <section className="headlines-section">
        <h1>Headlines</h1>
        <div className="news-cards">
          <div className="news-card">
            <h3>Breaking News</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="news-card">
            <h3>Event Update</h3>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="news-card">
            <h3>Rider Spotlight</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          </div>
          {/* Swipe right arrow goes here */}
        </div>
      </section>

      {/* Second Division - Recent Rides */}
      <section className="recent-rides-section">
        <h1>Recent Rides</h1>
        <div className="ride-cards">
          <div className="ride-card">
            <img src="1.png" alt="Recent Ride 1" />
            <p>Amazing mountain ride with breathtaking views!</p>
          </div>
          <div className="ride-card">
            <img src="2.png" alt="Recent Ride 2" />
            <p>Exploring coastal routes with fellow riders.</p>
          </div>
          <div className="ride-card">
            <img src="3.jpeg" alt="Recent Ride 3" />
            <p>Night ride through the city lights.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Biker Riders. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SecondHomepage;

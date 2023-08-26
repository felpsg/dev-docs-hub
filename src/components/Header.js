import React from 'react';
import '../assets.js/styles/header.css';
import rocketIcon from '../assets.js/images/rocket-icon1.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="menu-container">
          <div className="left-container"></div>
          <div className="logo-container">
            <Link to="/" id="logo" className="navbar-brand">
              CodeHub
              <img src={rocketIcon} alt="Rocket Icon" className="rocket-icon" />
            </Link>
          </div>
          <div className="right-container">
            {/* Coffee Icon Removed */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

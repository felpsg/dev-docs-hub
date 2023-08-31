import React from 'react';
import { Link } from 'react-router-dom';
import '../assets.js/styles/header.css';
import rocketIcon from '../assets.js/images/rocket-icon1.png';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="menu-container">
          <div className="logo-container">
            <Link to="/" id="logo" className="navbar-brand">
              CodeHub
              <img src={rocketIcon} alt="Rocket Icon" className="rocket-icon" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

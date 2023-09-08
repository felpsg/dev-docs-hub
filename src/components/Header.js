import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import rocketIcon from '../assets.js/images/rocket-icon1.png';

import '../assets.js/styles/header.css';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <header data-testid="header">
      <nav className="navbar">
        <div className="menu-container">
          <div className="logo-container">
            <Link to="/" id="logo" className="navbar-brand">
              CodeHub
              <img
                src={rocketIcon}
                alt="Rocket Icon"
                className="rocket-icon"
                data-testid="logo"
              />
            </Link>
          </div>
          <div className="hamburger-container">
            <button
              className={`navbar-toggler ${isActive ? 'active' : ''}`}
              type="button"
              onClick={handleToggle}
              aria-label="toggle navigation"
            >
              <span
                className={`navbar-toggler-icon ${isActive ? 'active' : ''}`}
              ></span>
            </button>
          </div>
        </div>
        <div
          className={`collapse ${isActive ? 'show' : ''}`}
          data-testid="menu"
        >
          <button
            className="close-button"
            onClick={handleToggle}
            aria-label="close"
          >
            X
          </button>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={handleToggle}>
                <i className="bi bi-person"></i> Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cadastro" onClick={handleToggle}>
                <i className="bi bi-person-plus"></i> Cadastro
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

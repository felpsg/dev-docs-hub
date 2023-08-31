import React from 'react';
import { Link } from 'react-router-dom';

const SubMenu = ({ subLinks, location }) => (
  <ul className="sub-menu">
    {subLinks.map((subLink, index) => (
      <li
        key={index}
        className={subLink.path === '/tutorial/step1' ? 'special-item' : ''}
      >
        <Link
          to={subLink.path}
          className={`text-decoration-none ${
            location.pathname === subLink.path ? 'active-link' : ''
          }`}
        >
          {subLink.label}
          {location.pathname === subLink.path && (
            <span
              className={`tutorial-indicator ${
                location.pathname.split('/')[2]
              }`}
            >
              <i className="bi bi-check"></i>
            </span>
          )}
        </Link>
      </li>
    ))}
  </ul>
);

export default SubMenu;

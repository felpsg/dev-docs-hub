import React from 'react';
import { Link } from 'react-router-dom';
import '../assets.js/styles/sidebar.css';

const links = [
  { path: '/docs/react', label: 'React.js' },
  { path: '/docs/javascript', label: 'JavaScript' },
  { path: '/docs/vue', label: 'Vue' },
  { path: '/docs/bootstrap', label: 'Bootstrap' },
  { path: '/docs/tailwind', label: 'Tailwind' },
];

function Sidebar() {
  return (
    <div className="col-md-3 sidebar">
      <h3>
        <Link to="/" className="text-decoration-none">
          Documentação
        </Link>
      </h3>
      <ul className="list-group">
        {links.map((link, index) => (
          <li className="list-group-item" key={index}>
            <Link to={link.path} className="text-decoration-none">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

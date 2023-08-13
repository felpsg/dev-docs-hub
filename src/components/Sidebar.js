import React from 'react';
import { Link } from 'react-router-dom';
import '../assets.js/styles/sidebar.css';

function Sidebar() {
  return (
    <div className="col-md-3 sidebar">
      <h3>
        <Link to="/docs" className="text-decoration-none">
          Documentação
        </Link>
      </h3>

      <ul className="list-group">
        <li className="list-group-item">
          <a href="/docs/react" className="text-decoration-none">
            React.js
          </a>
        </li>
        <li className="list-group-item">
          <a href="/docs/javascript" className="text-decoration-none">
            JavaScript
          </a>
        </li>
        <li className="list-group-item">
          <a href="/docs/vue" className="text-decoration-none">
            Vue
          </a>
        </li>
        <li className="list-group-item">
          <a href="/docs/bootstrap" className="text-decoration-none">
            Bootstrap
          </a>
        </li>
        <li className="list-group-item">
          <a href="/docs/tailwind" className="text-decoration-none">
            Tailwind
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

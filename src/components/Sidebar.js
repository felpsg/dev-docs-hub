import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets.js/styles/sidebar.css';

const links = [
  { path: '/chat', label: 'HubeGPT' },
  {
    path: '/tutorial',
    label: 'JavaScript Tutorial',
    subLinks: [
      { path: '/tutorial/step1', label: 'Inicio' },
      {
        path: '/tutorial/step2',
        label: 'Introdução',
      },
      // Adicione mais etapas conforme necessário
    ],
  },
  { path: '/docs/javascript', label: 'React.js' },
  { path: '/docs/vue', label: 'Vue' },
  { path: '/docs/bootstrap', label: 'Bootstrap' },
  { path: '/docs/tailwind', label: 'Tailwind' },
];

function Sidebar() {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const location = useLocation();

  const handleClick = (index) => {
    if (openSubMenu === index) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(index);
    }
  };

  return (
    <div className="col-md-3 sidebar">
      <h3>
        <Link to="/" className="text-decoration-none documentacion">
          Documentação
        </Link>
      </h3>
      <ul className="list-group">
        {links.map((link, index) => (
          <li className="list-group-item" key={index}>
            <Link
              to={link.path}
              className="text-decoration-none"
              onClick={() => handleClick(index)}
            >
              {link.label}
            </Link>
            {openSubMenu === index && link.subLinks ? (
              <ul className="sub-menu">
                {link.subLinks.map((subLink, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      to={subLink.path}
                      className={`text-decoration-none ${
                        location.pathname === subLink.path ? 'active-link' : ''
                      }`}
                    >
                      {subLink.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

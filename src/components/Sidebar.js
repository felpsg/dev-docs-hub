import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setStep } from '../store/actions';
import '../assets.js/styles/sidebar.css';

const links = [
  { path: '/home', label: 'Home' },
  { path: '/chat', label: 'HubeGPT' },
  {
    path: '/tutorial/javascript',
    label: 'JavaScript Tutorial',
    subLinks: [
      { path: '/tutorial/javascript/step1', label: 'Inicio' },
      { path: '/tutorial/javascript/step2', label: 'Introdução ao javascript' },
      { path: '/tutorial/javascript/step3', label: 'Vantagens e Desvantagens' },
      { path: '/tutorial/javascript/step4', label: 'Lógica de Programação' },
    ],
  },
  {
    path: '/tutorial/react',
    label: 'React Tutorial',
    subLinks: [
      { path: '/tutorial/react/step1', label: 'Inicio' },
      { path: '/tutorial/react/step2', label: 'Introdução ao React' },
      { path: '/tutorial/react/step3', label: 'Vantagens e Desvantagens' },
    ],
  },
  { path: '/docs/vue', label: 'Vue' },
  { path: '/docs/bootstrap', label: 'Bootstrap' },
  { path: '/docs/tailwind', label: 'Tailwind' },
];

const getStepFromPath = (path) => {
  const match = path.match(/\/tutorial\/(?:javascript|react)\/step(\d+)/);
  return match ? Number(match[1]) : null;
};

const SubMenu = ({ subLinks, location }) => (
  <ul className="sub-menu">
    {subLinks.map((subLink, index) => (
      <li key={index} className={subLink.path === '/tutorial/step1' ? 'special-item' : ''}>
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
);

const Sidebar = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const openSubMenuRef = useRef(openSubMenu);
  openSubMenuRef.current = openSubMenu;
  const location = useLocation();
  const dispatch = useDispatch();

  const handleSubMenuToggle = (index, hasSubLinks) => {
    if (hasSubLinks) {
      setOpenSubMenu(openSubMenu === index ? null : index);
    }
  };

  const closeSubMenus = () => {
    setOpenSubMenu(null);
  };

  useEffect(() => {
    const stepFromPath = getStepFromPath(location.pathname);
    if (stepFromPath) {
      dispatch(setStep(stepFromPath));
    }

    if (openSubMenuRef.current === null) {
      const matchingLinkIndex = links.findIndex((link) =>
        location.pathname.startsWith(link.path),
      );
      setOpenSubMenu(matchingLinkIndex);
    }
  }, [location.pathname, dispatch]);

  return (
    <div className="col-md-3 sidebar">
      <ul className="list-group">
        {links.map((link, index) => (
          <li className="list-group-item" key={index}>
            {link.subLinks ? (
              <div
                onClick={() => handleSubMenuToggle(index, !!link.subLinks)}
                className={`text-decoration-none ${
                  location.pathname.startsWith(link.path) ? 'active-link' : ''
                }`}
              >
                {link.label}
              </div>
            ) : (
              <Link
                to={link.path}
                onClick={closeSubMenus} // Feche os submenus ao clicar em um link principal
                className={`text-decoration-none ${
                  location.pathname.startsWith(link.path) ? 'active-link' : ''
                }`}
              >
                {link.label}
              </Link>
            )}
            {openSubMenu === index && link.subLinks && (
              <SubMenu subLinks={link.subLinks} location={location} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

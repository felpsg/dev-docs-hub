import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setStep } from '../store/actions';
import '../assets.js/styles/sidebar.css';

const links = [
  { path: '/home', label: 'Home' }, // QUERO QUE QUANDO CLICAR NESSE LINK ELE VOLTA PARA HOME
  { path: '/chat', label: 'HubeGPT' },
  {
    path: '/tutorial',
    label: 'JavaScript Tutorial',
    subLinks: [
      { path: '/tutorial/step1', label: 'Inicio' },
      { path: '/tutorial/step2', label: 'Introdução ao JavaScript' },
      { path: '/tutorial/step3', label: 'Vantagens e Desvantagens' },
      { path: '/tutorial/step4', label: 'Lógica de Programação' },
    ],
  },
  { path: '/docs/javascript', label: 'React.js' },
  { path: '/docs/vue', label: 'Vue' },
  { path: '/docs/bootstrap', label: 'Bootstrap' },
  { path: '/docs/tailwind', label: 'Tailwind' },
];

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
        </Link>
      </li>
    ))}
  </ul>
);

function Sidebar() {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();

  const toggleSubMenu = (index, hasSubLinks) => {
    if (openSubMenu === index || !hasSubLinks) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(index);
    }
  };

  useEffect(() => {
    const stepFromPath = Number(location.pathname.split('/tutorial/step')[1]);
    if (stepFromPath) {
      dispatch(setStep(stepFromPath));
    }

    const matchingLinkIndex = links.findIndex((link) =>
      location.pathname.startsWith(link.path),
    );
    setOpenSubMenu(matchingLinkIndex);
  }, [location.pathname, dispatch]);

  return (
    <div className="col-md-3 sidebar">
      <ul className="list-group">
        {links.map((link, index) => (
          <li className="list-group-item" key={index}>
            {link.subLinks ? (
              <div // Alterado de Link para div
                onClick={() => toggleSubMenu(index, !!link.subLinks)}
                className={`text-decoration-none ${
                  location.pathname.startsWith(link.path) ? 'active-link' : ''
                }`}
              >
                {link.label}
              </div>
            ) : (
              <Link
                to={link.path}
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
}

export default Sidebar;

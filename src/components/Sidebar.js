import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setStep } from '../store/actions';
import '../assets.js/styles/sidebar.css';
import SubMenu from './SubMenu';
import links from './SidebarLinks';

const getStepFromPath = (path) => {
  const match = path.match(/\/tutorial\/(?:javascript|react|css)\/step(\d+)/);
  return match ? Number(match[1]) : null;
};

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

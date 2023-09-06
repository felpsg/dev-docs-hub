import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../assets.js/styles/footer.css';
import Modal from 'react-modal';
import CoffeeModalContent from './CoffeeModalContent';

if (process.env.NODE_ENV !== 'test') {
  Modal.setAppElement('#root');
}

const socialIcons = [
  {
    href: 'https://github.com/felpsg/dev-docs-hub',
    className: 'bi bi-github icon',
  },
  {
    href: 'https://www.linkedin.com/in/felipetec/',
    className: 'bi bi-linkedin icon',
  },
];

const modalProps = {
  contentLabel: 'Coffee Modal',
  className: 'coffee-modal border-0',
  overlayClassName: 'overlay',
  shouldCloseOnOverlayClick: false,
  ariaHideApp: false,
};

const Footer = () => {
  const location = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  if (location.pathname !== '/home') {
    return null;
  }

  return (
    <footer className="footer" id="footerAbsolute">
      <div className="footer-content">
        <h4 className="footer-title">CodeHub</h4>
        <p className="footer-text">Tecnologia para o futuro.</p>
      </div>
      <div className="footer-social">
        {socialIcons.map((icon, index) => (
          <a key={index} href={icon.href} target="_blank" rel="noreferrer">
            <i className={icon.className}></i>
          </a>
        ))}
        <i
          data-testid="open-modal-icon"
          className="bi bi-cup-straw icon"
          onClick={openModal}
        ></i>
      </div>
      <Modal isOpen={modalIsOpen} {...modalProps}>
        <CoffeeModalContent closeModal={closeModal} />
      </Modal>
    </footer>
  );
};

export default Footer;

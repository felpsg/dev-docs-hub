import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../assets.js/styles/footer.css';
import Modal from 'react-modal';
import CoffeeModalContent from './CoffeeModalContent';

if (process.env.NODE_ENV !== 'test') {
  Modal.setAppElement('#root');
}

const GITHUB_LINK = "https://github.com/felpsg/dev-docs-hub";
const LINKEDIN_LINK = "https://www.linkedin.com/in/felipetec/";

const Footer = () => {
  const location = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  if (location.pathname !== '/home') {
    return null;
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <h4 className="footer-title">CodeHub</h4>
        <p className="footer-text">Tecnologia para o futuro.</p>
      </div>
      <div className="footer-social">
        <a href={GITHUB_LINK} target="_blank" rel="noreferrer">
          <i className="bi bi-github icon"></i>
        </a>
        <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin icon"></i>
        </a>
        <i
          data-testid="open-modal-icon"
          className="bi bi-cup-straw icon"
          onClick={openModal}
        ></i>
      </div>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Coffee Modal"
        className="coffee-modal border-0"
        overlayClassName="overlay"
        shouldCloseOnOverlayClick={false}
        ariaHideApp={false}
      >
        <CoffeeModalContent closeModal={closeModal} />
      </Modal>
    </footer>
  );
};

export default Footer;
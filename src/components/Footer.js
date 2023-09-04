import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../assets.js/styles/footer.css';
import coffeeIcon from '../assets.js/images/coffe.png';
import qrCodeImage from '../assets.js/images/qrcode.png';
import Modal from 'react-modal';

if (process.env.NODE_ENV !== 'test') {
  Modal.setAppElement('#root');
}

const Footer = () => {
  const location = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const iconStyle = {
    fontSize: '24px',
    color: '#F8A244',
    marginLeft: '10px',
  };

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
        <a
          href="https://github.com/felpsg/dev-docs-hub"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-github" style={iconStyle}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/felipetec/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-linkedin" style={iconStyle}></i>
        </a>
        <i
          data-testid="open-modal-icon"
          className="bi bi-cup-straw"
          style={iconStyle}
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
        <div className="modal-header text-center">
          <h2 className="modal-title w-100 title-coffe">
            Erro 404: Café não Encontrado!
          </h2>
        </div>
        <div className="coffee-icon-container">
          <img
            src={coffeeIcon}
            alt="Coffee Icon"
            className="modal-coffee-icon"
          />
          <p className="modal-message">
            <span className="aviso">Aviso de Desenvolvedor</span>: A cafeína
            está em níveis críticos. Um café virtual previne bugs. Esse conteúdo
            é gratuito para apoiar novos devs que estão entrando na área.
            Ajude-nos com um café! Sua doação mantém nosso código fluindo e
            apoia a comunidade.
          </p>
          <img src={qrCodeImage} alt="QR Code" className="qr-code-image" />
          <button className="close-button" onClick={closeModal}>
            X
          </button>
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;

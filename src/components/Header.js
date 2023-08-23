import React, { useState, useEffect } from 'react';
import '../assets.js/styles/header.css';
import rocketIcon from '../assets.js/images/rocket-icon1.png';
import coffeeIcon from '../assets.js/images/coffe.png';
import qrCodeImage from '../assets.js/images/qrcode.png'; // Ajuste o caminho para o local correto do arquivo

import { Link } from 'react-router-dom';
import Modal from 'react-modal';

// Certifique-se de definir o elemento raiz para o modal, geralmente o elemento com id='root'
Modal.setAppElement('#root');

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    // Função que abre o modal a cada 10 minutos
    const showModalInterval = setInterval(() => {
      setModalIsOpen(true);
    }, 10 * 60 * 1000); // 10 minutos em milissegundos
    // Função de limpeza que limpará o intervalo quando o componente for desmontado
    return () => {
      clearInterval(showModalInterval);
    };
  }, []); // O array vazio faz com que o useEffect seja executado apenas uma vez

  return (
    <header>
      <nav className="navbar">
        <div className="menu-container">
          <div className="left-container"></div>
          <div className="logo-container">
            <Link to="/" id="logo" className="navbar-brand">
              CodeHub
              <img src={rocketIcon} alt="Rocket Icon" className="rocket-icon" />
            </Link>
          </div>
          <div className="right-container">
            <img
              src={coffeeIcon}
              alt="Coffee Icon"
              className="coffee-icon"
              onClick={openModal}
            />
          </div>
        </div>
      </nav>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Coffee Modal"
        className="coffee-modal border-0"
        overlayClassName="overlay"
        shouldCloseOnOverlayClick={false}
      >
        <div className="modal-header text-center">
          <h2 className="modal-title w-100">Erro 404: Café não Encontrado!</h2>
        </div>

        <div className="coffee-icon-container">
          <img
            src={coffeeIcon}
            alt="Coffee Icon"
            className="modal-coffee-icon"
          />

          <p className="modal-message">
            <span className="aviso">Aviso de Desenvolvedor</span>: A cafeína
            está em níveis críticos. Uma xícara virtual de café pode prevenir
            bugs inesperados. Se nosso conteúdo agregou algo a você, considere
            paga-nos um café? Sua doação mantém nosso código fluindo!
          </p>
          <img src={qrCodeImage} alt="QR Code" className="qr-code-image" />
          <button className="close-button" onClick={closeModal}>
            X
          </button>
        </div>
      </Modal>
    </header>
  );
};

export default Header;

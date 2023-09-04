import React from 'react';
import coffeeIcon from '../assets.js/images/coffe.png';
import qrCodeImage from '../assets.js/images/qrcode.png';

const CoffeeModalContent = ({ closeModal }) => (
  <>
    <div className="modal-header text-center">
      <h2 className="modal-title w-100 title-coffe">
        Erro 404: Café não Encontrado!
      </h2>
    </div>
    <div className="coffee-icon-container">
      <img src={coffeeIcon} alt="Coffee Icon" className="modal-coffee-icon" />
      <p className="modal-message">
        <span className="aviso">Aviso de Desenvolvedor</span>: A cafeína está em
        níveis críticos. Um café virtual previne bugs. Esse conteúdo é gratuito
        para apoiar novos devs que estão entrando na área. Ajude-nos com um
        café! Sua doação mantém nosso código fluindo e apoia a comunidade.
      </p>
      <img src={qrCodeImage} alt="QR Code" className="qr-code-image" />
      <button className="close-button" onClick={closeModal}>
        X
      </button>
    </div>
  </>
);

export default CoffeeModalContent;

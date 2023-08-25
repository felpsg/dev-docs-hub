import React from 'react';
import { useLocation } from 'react-router-dom'; // Importe o useLocation
import '../assets.js/styles/footer.css';

const Footer = () => {
  const location = useLocation(); // Use o Hook useLocation

  // Se a localização não for a página inicial, retorne null
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
          <i
            className="bi bi-github"
            style={{ fontSize: '24px', color: '#F8A244' }}
          ></i>
        </a>
        <a
          href="https://www.linkedin.com/in/felipetec/"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="bi bi-linkedin"
            style={{ fontSize: '24px', color: '#F8A244', marginLeft: '10px' }}
          ></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import '../assets.js/styles/header.css';
import rocketIcon from '../assets.js/images/rocket-icon.png';

const codeSnippets = [
  `
  // Componente Home
  const Home = () => <a href='/' className='code-snippet'>Home</a>;

  // Componente Sobre
  const Sobre = () => <a href='/sobre' className='code-snippet'>Sobre</a>;

  // Componente Contato
  const Contato = () => <a href='/contato' className='code-snippet'>Contato</a>;
  `,
];

const useTypingEffect = (isMenuOpen) => {
  const [typingText, setTypingText] = useState('');

  useEffect(() => {
    let timeout;
    if (isMenuOpen) {
      const typeSnippet = () => {
        for (let i = 0; i < codeSnippets[0].length; i++) {
          timeout = setTimeout(() => {
            setTypingText((prevText) => prevText + codeSnippets[0][i]);
          }, i * 10);
        }
      };
      typeSnippet();
    }
    return () => clearTimeout(timeout);
  }, [isMenuOpen]);

  return typingText;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const typingText = useTypingEffect(isMenuOpen);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      console.log('Menu closing...');
    } else {
      console.log('Menu opening...');
    }
  };

  return (
    <header>
      <nav className="navbar">
        <div className="menu-container">
          <div id="logo" className="navbar-brand" onClick={toggleMenu}>
            CodeHub
            <img
              src={rocketIcon}
              alt="Rocket Icon"
              className="rocket-icon"
            />{' '}
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="nav-menu">
          <pre className="code-snippet">
            <div dangerouslySetInnerHTML={{ __html: typingText }} />
          </pre>
          <button onClick={toggleMenu} className="nav-link button-close">
            X
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

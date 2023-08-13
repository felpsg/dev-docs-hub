import React, { useState, useEffect } from 'react';
import '../assets.js/styles/header.css';

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

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typingText, setTypingText] = useState('');

  useEffect(() => {
    let timeouts = [];
    const typeSnippet = () => {
      for (let i = 0; i < codeSnippets[0].length; i++) {
        const timeout = setTimeout(() => {
          setTypingText((prevText) => prevText + codeSnippets[0][i]);
        }, i * 10);
        timeouts.push(timeout);
      }
    };

    if (isMenuOpen) typeSnippet();

    // Limpeza de timeouts
    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, [isMenuOpen]);

  const openMenu = () => {
    setIsMenuOpen(true);
    setTypingText('');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setTypingText('');
  };

  return (
    <header>
      <nav className="navbar">
        <div className="menu-container">
          <div id="logo" className="navbar-brand" onClick={openMenu}>
            CodeHub
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="nav-menu">
          <pre className="code-snippet">
            <div dangerouslySetInnerHTML={{ __html: typingText }} />
          </pre>
          <button onClick={closeMenu} className="nav-link button-close">
            X
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;

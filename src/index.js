import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './assets.js/styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Obtendo o elemento root do DOM
const root = document.getElementById('root');

// Criando uma raiz (root) concorrente
const appRoot = ReactDOM.createRoot(root);

// Renderizando o componente App dentro do elemento root em modo estrito
appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

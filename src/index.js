import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './assets.js/styles/reset.css'; // Corrigindo o caminho
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const root = document.getElementById('root');
const appRoot = ReactDOM.createRoot(root);

appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

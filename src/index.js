import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './assets.js/styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  root,
);

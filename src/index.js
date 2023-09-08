import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

import './App.css';
import './assets.js/styles/reset.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  root,
);

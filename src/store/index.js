// src/store/index.js

import { createStore } from 'redux';
import { combineReducers } from 'redux'; // Importe combineReducers
import tutorialReducer from './reducers';

const rootReducer = combineReducers({
  tutorialReducer: tutorialReducer, // Certifique-se de usar o nome correto do reducer
});

const store = createStore(rootReducer); // Use o rootReducer combinado

export default store;

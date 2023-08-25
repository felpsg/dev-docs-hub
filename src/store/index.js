import { createStore } from 'redux';
import { combineReducers } from 'redux'; 
import tutorialReducer from './reducers';

const rootReducer = combineReducers({
  tutorialReducer: tutorialReducer, 
});

const store = createStore(rootReducer); 

export default store;

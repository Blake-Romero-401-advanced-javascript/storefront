import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//imports reducers
import products from './products.js';

let reducers = combineReducers({ products });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
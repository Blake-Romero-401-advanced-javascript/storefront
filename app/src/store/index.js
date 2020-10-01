import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//imports reducers
import products from './products.js';
import simplecart from './cart.js';

let reducers = combineReducers({ products, simplecart });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
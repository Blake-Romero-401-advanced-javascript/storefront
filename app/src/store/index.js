import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

//imports reducers
import counter from './counter';

let reducers = combineReducers({ counter });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
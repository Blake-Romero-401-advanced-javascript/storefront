/* eslint-disable no-case-declarations */
let initialState = {
  products: [
    { name: 'Product 1', quantity: 0},
    { name: 'Product 2', quantity: 0},
    { name: 'Product 3', quantity: 0},
  ],
  totalQuantity: 0,
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      let totalQuantity = state.totalQuantity + 1;
      let products = state.products.map(product => {
        if (product.name === payload) {
          return { name: product.name, quantity: product.quantity + 1 }
        }
        return product;
      });

      return { totalQuantity, products };

      case 'RESET':
        return initialState;

      default:
        return state;
  }
};

//Actions
export const increment = (name) => {
  return {
    type: 'INCREMENT',
    payload: name,
  };
};

export const decrement = (name) => {
  return {
    type: 'DECREMENT',
    payload: name,
  };
};

export const reset = (name) => {
  return {
    type: 'RESET',
  };
};
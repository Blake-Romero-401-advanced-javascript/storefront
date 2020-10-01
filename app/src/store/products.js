/* eslint-disable no-case-declarations */
// let initialState = {
//   products: [
//     { name: 'Product 1', quantity: 0},
//     { name: 'Product 2', quantity: 0},
//     { name: 'Product 3', quantity: 0},
//   ],
//   totalQuantity: 0,
// };
let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Elecronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5, quantity: 0 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15, quantity: 0 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25, quantity: 0 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10, quantity: 0 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500, quantity: 0 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12, quantity: 0 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90, quantity: 0 },
  ],
  activeCategory: 'test',
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

    case 'CHANGE':
      return {...state, activeCategory: payload};

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

export const changeCategory = (name) =>  {
  return {
    type: 'CHANGE',
    payload: name,
  };
};
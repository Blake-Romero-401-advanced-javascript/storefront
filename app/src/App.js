import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './storefront/categories';
import CurrentCategory from './storefront/current-category';
import Products from './storefront/Products';
import ShoppingCart from './storefront/SimpleCart';

import './App.css';

export default props => {
  return (
    <>
      {/* <CssBaseline /> */}
      <Header />
      <ShoppingCart />
      <main>
        <Categories />
        <CurrentCategory />
        <Products />
      </main>
      <Footer />
    </>
  )
}

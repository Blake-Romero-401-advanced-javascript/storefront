import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './storefront/categories';
import CurrentCategory from './storefront/current-category';
import Products from './components/Products';

import './App.css';

export default props => {
  return (
    <>
      {/* <CssBaseline /> */}
      <Header />
      <main>
        <Categories />
        <CurrentCategory />
        {/* <Products /> */}
      </main>
      <Footer />
    </>
  )
}

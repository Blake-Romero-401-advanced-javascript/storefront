import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Products from './components/Products';

import './App.css';

export default props => {
  return (
    <>
      <Header />
      {/* <Categories /> */}
      <Products />
      <Footer />
    </>
  )
}

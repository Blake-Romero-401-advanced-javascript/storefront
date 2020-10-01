import React from 'react';
import { connect } from 'react-redux';
import { increment, reset } from '../store/products';
import { AddToCart } from '../store/cart';

const ItemCounter = props => {
  return (
    <section className="counter">
      <ul>
        {props.products.products.map(item => 
        // {
          // return (
          //   <>
          // <li key={item.name}>{item.name} : {item.quantity}</li>
          // <button onClick={() => props.increment(item.quantity)} key={item.name}>Add to Cart</button>
          // </>
          // )})}
          <>
          <li key={item.name}>{item.name} : {item.quantity}</li>
          <button onClick={() => props.AddToCart(item)} key={item.name}>Add to Cart</button>
        {console.log('whats in the cart',props.products)}
        </>
          )}
      </ul>
      {/* <button onClick={props.reset}>Reset</button> */}
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = {
  increment,
  // reset,
  AddToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemCounter);
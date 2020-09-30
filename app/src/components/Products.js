import React from 'react';
import { connect } from 'react-redux';
import { increment, reset } from '../store/products';

const ItemCounter = props => {
  return (
    <section className="counter">
      <ul>
        {props.products.map(item => 
          <li onClick={() => props.increment(item.name)} key={item.name}>{item.name} : {item.quantity}</li>
          )}
      </ul>
      <button onClick={props.reset}>Reset</button>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.counter.products
  }
}

const mapDispatchToProps = {
  increment,
  reset,
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemCounter);
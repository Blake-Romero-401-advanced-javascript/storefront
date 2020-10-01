import React from 'react';
import { connect } from 'react-redux';

const SimpleCart = props => {
    return (
        <div className="simple-cart">
            {console.log('props',props)}
            <p>Items in Cart: {props.shoppingCart}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        shoppingCart: state.simplecart.length,
    }
}

export default connect(mapStateToProps)(SimpleCart);
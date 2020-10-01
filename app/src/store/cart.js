const initialState = {
    shoppingCart: [],
}

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch(type){

        case 'AddToCart':
            let cartTotal = state.shoppingCart.push(payload);
            return {...state, cartTotal};

        default:
            return state;
    }
}

export const AddToCart = (item) => {
    return {
        type: 'AddToCart',
        payload: item,
    }
}
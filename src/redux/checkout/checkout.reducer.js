const { CHECKOUT_ITEM, CHECKOUT_CART } = require('./checkout.type');

const initialState = {
  items: [],
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_ITEM: {
      return { ...state, items: [{ ...action.payload, quantity: 1 }] };
    }
    case CHECKOUT_CART: {
      return {
        ...state,
        items: [...action.payload],
      };
    }
    default:
      return state;
  }
};

export default checkoutReducer;

const {
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
  ADD_ITEM_TO_CART,
  INCREASE_ITEM_IN_CART,
  DECREASE_ITEM_IN_CART,
  CLEAR_CART,
  REMOVE_ITEM_IN_CART,
} = require('./cart.type');

const initialState = {
  loading: false,
  cartItems: [],
  cartQuantity: 0,
  error: undefined,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CART_REQUEST:
      return {
        ...state,
        cartItems: [],
        cartQuantity: 0,
        error: undefined,
        loading: true,
      };
    case FETCH_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        cartItems: action.payload,
        cartQuantity: action.payload.length,
      };
    case FETCH_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        cartItems: [],
        cartQuantity: 0,
      };
    case ADD_ITEM_TO_CART: {
      const idx = state.cartItems.find((item) => item.id === action.payload.id);
      if (!idx || idx === -1) {
        const tmpItem = { ...action.payload, quantity: 1 };
        return {
          ...state,
          cartItems: [...state.cartItems, tmpItem],
          cartQuantity: state.cartQuantity + 1,
        };
      } else {
        let check = false;
        if (state.cartItems[idx].quantity < state.cartItems[idx].stock) {
          state.cartItems[idx].quantity++;
          check = true;
        }
        return {
          ...state,
          cartQuantity: state.cartQuantity + (check == true) ? 1 : 0,
        };
      }
    }

    case INCREASE_ITEM_IN_CART: {
      const idx = state.cartItems.findIndex((item) => item.id === action.payload);
      state.cartItems[idx].quantity++;
      return {
        ...state,
        cartQuantity: state.cartQuantity + 1,
      };
    }
    case DECREASE_ITEM_IN_CART: {
      const idx = state.cartItems.findIndex((item) => item.id === action.payload);
      const tmp = state.cartItems[idx];
      state.cartItems[idx].quantity--;
      if (state.cartItems[idx].quantity == 0) {
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id != tmp.id),
          cartQuantity: state.cartQuantity - 1,
        };
      }
      return {
        ...state,
        cartQuantity: state.cartQuantity - 1,
      };
    }
    case CLEAR_CART:
      return {
        ...initialState,
      };
    case REMOVE_ITEM_IN_CART: {
      const idx = state.cartItems.findIndex((item) => item.id === action.payload);
      const tmp = state.cartItems[idx];
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id != tmp.id),
        cartQuantity: state.cartQuantity - tmp.quantity,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;

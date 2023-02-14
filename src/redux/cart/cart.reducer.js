import { CART } from '~/shared/constants';

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
  cartItems: localStorage.getItem(CART) ? JSON.parse(localStorage.getItem(CART)).cartItems : [],
  cartQuantity: localStorage.getItem(CART)
    ? JSON.parse(localStorage.getItem(CART)).cartQuantity
    : 0,
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
        cartItems: action.payload.products,
        cartQuantity: action.payload.totalQuantity,
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
      let { product, quantity } = action.payload;
      const idx = state.cartItems.findIndex((item) => item.id === product.id);
      let newState;
      if (idx === -1) {
        if (quantity > product.stock) {
          quantity = product.stock;
        }
        const tmpItem = { ...product, quantity };
        newState = {
          ...state,
          cartItems: [...state.cartItems, tmpItem],
          cartQuantity: state.cartQuantity + quantity,
        };
      } else {
        let check = false;
        let dif;
        if (state.cartItems[idx].quantity + quantity <= state.cartItems[idx].stock) {
          state.cartItems[idx].quantity += quantity;
          check = true;
        } else {
          dif = product.stock - state.cartItems[idx].quantity;
          state.cartItems[idx].quantity = product.stock;
        }
        newState = {
          ...state,
          cartQuantity: state.cartQuantity + (check === true ? quantity : dif),
        };
      }
      localStorage.setItem(CART, JSON.stringify(newState));
      return newState;
    }

    case INCREASE_ITEM_IN_CART: {
      const idx = state.cartItems.findIndex((item) => item.id === action.payload);
      state.cartItems[idx].quantity++;
      let newState = {
        ...state,
        cartQuantity: state.cartQuantity + 1,
      };
      localStorage.setItem(CART, JSON.stringify(newState));
      return newState;
    }
    case DECREASE_ITEM_IN_CART: {
      const idx = state.cartItems.findIndex((item) => item.id === action.payload);
      const tmp = state.cartItems[idx];
      let newState;
      state.cartItems[idx].quantity--;
      if (state.cartItems[idx].quantity === 0) {
        newState = {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== tmp.id),
          cartQuantity: state.cartQuantity - 1,
        };
      } else {
        newState = {
          ...state,
          cartQuantity: state.cartQuantity - 1,
        };
      }
      localStorage.setItem(CART, JSON.stringify(newState));
      return newState;
    }
    case CLEAR_CART:
      localStorage.setItem(CART, JSON.stringify({ ...initialState }));
      return {
        ...initialState,
      };
    case REMOVE_ITEM_IN_CART: {
      const idx = state.cartItems.findIndex((item) => item.id === action.payload);
      const tmp = state.cartItems[idx];
      let newState = {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== tmp.id),
        cartQuantity: state.cartQuantity - tmp.quantity,
      };
      localStorage.setItem(CART, newState);
      return newState;
    }
    default:
      return state;
  }
};

export default cartReducer;

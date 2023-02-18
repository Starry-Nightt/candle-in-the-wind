import { CART } from '~/shared/constants/local-storage-key';
import { SuccessNotify } from '~/shared/utils/notify';

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
      const idx = state.cartItems.findIndex((item) => item.ID_Product === product.ID_Product);
      let newState;
      if (idx === -1) {
        const tmpItem = { ...product, quantity };
        newState = {
          ...state,
          cartItems: [...state.cartItems, tmpItem],
          cartQuantity: state.cartQuantity + quantity,
        };
      } else {
        newState = {
          ...state,
          cartItems: state.cartItems.map((item) => {
            if (item.ID_Product === product.ID_Product) item.quantity += quantity;
            return item;
          }),
          cartQuantity: state.cartQuantity + quantity,
        };
      }
      localStorage.setItem(CART, JSON.stringify(newState));
      SuccessNotify('Thêm vào giỏ hàng thành công');
      return newState;
    }

    case INCREASE_ITEM_IN_CART: {
      const idx = state.cartItems.findIndex((item) => item.ID_Product === action.payload);
      state.cartItems[idx].quantity++;
      let newState = {
        ...state,
        cartQuantity: state.cartQuantity + 1,
      };
      localStorage.setItem(CART, JSON.stringify(newState));
      return newState;
    }
    case DECREASE_ITEM_IN_CART: {
      const idx = state.cartItems.findIndex((item) => item.ID_Product === action.payload);
      const tmp = state.cartItems[idx];
      let newState;
      state.cartItems[idx].quantity--;
      if (state.cartItems[idx].quantity === 0) {
        newState = {
          ...state,
          cartItems: state.cartItems.filter((item) => item.ID_Product !== tmp.ID_Product),
          cartQuantity: state.cartQuantity - 1,
        };
      } else {
        newState = {
          ...state,
          cartQuantity: state.cartQuantity - 1 >= 0 ? state.cartQuantity - 1 : 0,
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
      const idx = state.cartItems.findIndex((item) => item.ID_Product === action.payload);
      const tmp = state.cartItems[idx];
      let newState = {
        ...state,
        cartItems: state.cartItems.filter((item) => item.ID_Product !== tmp.ID_Product),
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

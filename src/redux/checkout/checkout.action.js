import { CHECKOUT_CART, CHECKOUT_ITEM } from './checkout.type';

export const checkoutItem = (item) => {
  return {
    type: CHECKOUT_ITEM,
    payload: item,
  };
};

export const checkoutCart = (cartItems) => {
  return {
    type: CHECKOUT_CART,
    payload: cartItems,
  };
};

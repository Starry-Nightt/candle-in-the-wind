import appAPI from '../utils/appAPI';
class CartService {
  getCart = () => {
    return appAPI.get('cart/getCart');
  };

  // Truyền vào object data => đã destructuring thành id và quantity
  addProductToCart = ({ id, quantity }) => {
    return appAPI.post(
      'cart/addProductToCart',
      {
        ID_Product: id,
        quantity: quantity,
      },
      { withCredentials: true },
    );
  };

  deleteProductFromCart = (id) => {
    return appAPI.delete('cart/deleteProductFromCart', {
      data: { ID_Product: [id] },
      withCredentials: true,
    });
  };

  deleteCart = () => {
    return appAPI.post('cart/deleteCart', { withCredentials: true });
  };
}

export default new CartService();

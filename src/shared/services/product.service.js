import appClient from '@utils/appClient';

class ProductService {
  getAllProduct = () => {
    return appClient().get('products');
  };

  getProduct = (id) => {
    return appClient().get(`products/${id}`);
  };
}

export default new ProductService();

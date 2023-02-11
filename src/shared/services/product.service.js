import appClient from '@utils/appClient';

class ProductService {
  getCategoryProduct = (category, params = {}) => {
    let path;
    switch (category) {
      case 'oil':
        path = '/category/smartphones';
        break;
      case 'candle':
        path = '/category/laptops';
        break;
      case 'wax':
        path = '/category/fragrances';
        break;
      case 'decorate':
        path = '/category/skincare';
        break;
      case 'accessory':
        path = '/category/groceries';
        break;
      default:
        path = '';
    }
    return appClient().get(`products${path}`, {
      params,
    });
  };
}

export default new ProductService();

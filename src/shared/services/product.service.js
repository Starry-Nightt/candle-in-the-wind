import appClient from '@utils/appClient';
import appAPI from '../utils/appClient2';

class ProductService {
  getCategoryProduct = (category, params = {}, searchValue, sortFilter, priceRange) => {
    const { limit, skip } = params;
    // if (searchValue) {
    params = { limit: 0 };
    // }

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
    return appClient()
      .get(`products${path}`, {
        params,
      })
      .then((res) => {
        sortFilter.sortFunc(res.data.products);
        if (priceRange.from && priceRange.to) {
          res.data.products = res.data.products.filter((product) => {
            return product.price > priceRange.from && product.price < priceRange.to;
          });
          res.data.total = res.data.products.length;
        }
        let total = 0;
        if (searchValue) {
          res.data.products = res.data.products.filter((product) => {
            let title = product.title.toLowerCase();
            let description = product.description.toLowerCase();
            searchValue = searchValue.toLowerCase().trim();
            let flag = title.startsWith(searchValue) || description.includes(searchValue);
            if (flag) total++;
            return flag && total > skip && total <= skip + limit;
          });
          res.data.total = total;
        } else {
          res.data.products = res.data.products.filter((product) => {
            total++;
            return total > skip && total <= skip + limit;
          });
        }
        return res;
      });
  };

  getAllProduct = () => {
    return appAPI().get('/product/getAllProduct');
  };

  getProduct = (id) => {
    return appAPI().get(`product/getProductByID/${id}`);
  };

  getAllCategory = () => {
    return appAPI().get('product/getAllCategory');
  };
  getProductByCategory = (categoryID) => {
    return appAPI().get(`product/searchProduct?id_category=${categoryID}`);
  };

  getProductByName = (key) => {
    return appAPI().get(`product/searchProduct?search=${key}`);
  };
}

export default new ProductService();

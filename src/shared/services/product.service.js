import appClient from '@utils/appClient';

class ProductService {
  getCategoryProduct = (category, params = {}, searchValue, sortFilter) => {
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
        let total = 0;
        if (searchValue) {
          res.data.products = res.data.products.filter((product) => {
            let title = product.title.toLowerCase();
            let description = product.description.toLowerCase();
            searchValue = searchValue.toLowerCase();

            let flag = title.includes(searchValue) || description.includes(searchValue);
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

  getProduct = (id) => {
    return appClient().get(`products/${id}`);
  };
}

export default new ProductService();

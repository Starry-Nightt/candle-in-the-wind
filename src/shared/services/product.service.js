import appClient from '@utils/appClient';

class ProductService {
  getCategoryProduct = (category, params = {}, searchValue) => {
    const { limit, skip } = params;
    if (searchValue) {
      params = { limit: 0 };
    }

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
        if (searchValue) {
          let total = 0;
          res.data.products = res.data.products.filter((product) => {
            let title = product.title.toLowerCase();
            let description = product.description.toLowerCase();
            searchValue = searchValue.toLowerCase();

            let flag = title.includes(searchValue) || description.includes(searchValue);
            if (flag) total++;
            return flag && total > skip && total <= skip + limit;
          });
          res.data.total = total;
        }
        console.log(res);
        return res;
      });
  };

  getProduct = (id) => {
    return appClient().get(`products/${id}`);
  };
}

export default new ProductService();

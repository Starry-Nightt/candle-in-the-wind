import appClient from '@utils/appClient';

class ProductService {
  getCategoryProduct = (category, currentPage, sortFilter, priceRange, searchValue) => {
    const limit = 30;
    const skip = (currentPage - 1) * limit;
    const params = { limit: 0 };

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
        if (sortFilter) sortFilter.sortFunc(res.data.products);

        if (priceRange?.from && priceRange?.to) {
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
            let tmp = searchValue.toLowerCase().trim();
            let flag = title.startsWith(tmp) || description.includes(tmp);
            if (flag) total++;
            return flag && total > skip && total <= skip + limit;
          });
          res.data.total = total;
        } else {
          if (limit) {
            res.data.products = res.data.products.filter((product) => {
              total++;
              return total > skip && total <= skip + limit;
            });
          }
        }

        return res;
      });
  };

  getProduct = (id) => {
    return appClient().get(`products/${id}`);
  };
}

export default new ProductService();

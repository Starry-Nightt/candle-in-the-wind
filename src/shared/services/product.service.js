import appAPI from '../utils/appAPI';
class ProductService {
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

  getProductByKey = (key) => {
    return appAPI().get(`product/searchProduct?search=${key}`);
  };
}

export default new ProductService();

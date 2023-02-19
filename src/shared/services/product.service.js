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

  createProduct = (product) => {
    return appAPI().post('product/addNewProduct', {
      data: product,
      withCredentials: true,
    });
  };

  deleteProduct = (id) => {
    return appAPI().delete('product/deleteProduct', {
      data: { ID_Product: [id] },
      withCredentials: true,
    });
  };

  updateProduct = (id, data) => {
    const payload = { id, ...data };
    return appAPI().post('/product/updateProduct', {
      data: { ...payload },
      withCredentials: true,
    });
  };
}

export default new ProductService();

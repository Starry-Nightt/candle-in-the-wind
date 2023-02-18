import ProductService from '~/shared/services/product.service';
import { fetchProductFailure, fetchProductRequest, fetchProductSuccess } from './product.action';

const loadProductByCategory = (categoryId = 'all') => {
  return function (dispatch) {
    dispatch(fetchProductRequest());
    if (categoryId !== 'all') {
      ProductService.getProductByCategory(categoryId)
        .then((response) => {
          dispatch(fetchProductSuccess(response.data));
          console.log(response.data);
        })
        .catch((error) => dispatch(fetchProductFailure(error.data)));
    } else {
      ProductService.getAllProduct()
        .then((response) => {
          dispatch(fetchProductSuccess(response.data));
        })
        .catch((error) => dispatch(fetchProductFailure(error.data)));
    }
  };
};

const loadProductByKeyword = (key) => {
  return function (dispatch) {
    dispatch(fetchProductRequest());
    ProductService.getProductByKey(key)
      .then((response) => {
        dispatch(fetchProductSuccess(response.data));
      })
      .catch((error) => dispatch(fetchProductFailure(error.data)));
  };
};

export { loadProductByCategory, loadProductByKeyword };

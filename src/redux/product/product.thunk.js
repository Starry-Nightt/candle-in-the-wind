import ProductService from '~/shared/services/product.service';
import { fetchProductFailure, fetchProductRequest, fetchProductSuccess } from './product.action';

const loadProduct = (category) => {
  return function (dispatch) {
    dispatch(fetchProductRequest());
    ProductService.getAllProduct(category)
      .then((response) => {
        dispatch(fetchProductSuccess(response.data));
      })
      .catch((error) => dispatch(fetchProductFailure(error.data)));
  };
};

export { loadProduct };

import ProductService from '~/shared/services/product.service';
import { fetchProductFailure, fetchProductRequest, fetchProductSuccess } from './product.action';

const loadProduct = () => {
  return function (dispatch) {
    dispatch(fetchProductRequest());
    ProductService.getAllProduct()
      .then((response) => dispatch(fetchProductSuccess(response.data)))
      .catch((error) => dispatch(fetchProductFailure(error.data)));
  };
};

export { loadProduct };
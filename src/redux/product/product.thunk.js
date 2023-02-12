import ProductService from '~/shared/services/product.service';
import { fetchProductFailure, fetchProductRequest, fetchProductSuccess } from './product.action';

const loadProduct = (category, skip, searchValue, sortFilter) => {
  return function (dispatch) {
    dispatch(fetchProductRequest());

    ProductService.getCategoryProduct(category, { limit: 30, skip: skip }, searchValue, sortFilter)
      .then((response) => {
        dispatch(fetchProductSuccess(response.data));
      })
      .catch((error) => dispatch(fetchProductFailure(error.data)));
  };
};

export { loadProduct };

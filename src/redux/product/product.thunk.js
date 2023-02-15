import ProductService from '~/shared/services/product.service';
import { fetchProductFailure, fetchProductRequest, fetchProductSuccess } from './product.action';

const loadProduct = (category, currentPage, sortFilter, priceRange, searchValue) => {
  return function (dispatch) {
    dispatch(fetchProductRequest());

    ProductService.getCategoryProduct(category, currentPage, sortFilter, priceRange, searchValue)
      .then((response) => {
        dispatch(fetchProductSuccess(response.data));
      })
      .catch((error) => dispatch(fetchProductFailure(error.data)));
  };
};

export { loadProduct };

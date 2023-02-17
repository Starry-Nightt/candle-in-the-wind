import ProductService from '~/shared/services/product.service';
import { fetchProductFailure, fetchProductRequest, fetchProductSuccess } from './product.action';

const loadProduct = (category, skip, searchValue, sortFilter, priceRange) => {
  return function (dispatch) {
    dispatch(fetchProductRequest());

    // if (category )

    ProductService.getAllProduct()
      .then((response) => {
        console.log(response.data);
        dispatch(fetchProductSuccess(response.data));
      })
      .catch((error) => dispatch(fetchProductFailure(error.data)));
    // ProductService.getCategoryProduct(category, { limit: 30, skip: skip }, searchValue, sortFilter, priceRange)
    //   .then((response) => {
    //     dispatch(fetchProductSuccess(response.data));
    //   })
    //   .catch((error) => dispatch(fetchProductFailure(error.data)));
  };
};

export { loadProduct };

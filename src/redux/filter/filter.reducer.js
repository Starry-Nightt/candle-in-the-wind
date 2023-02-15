import sortFilterList from '~/modules/Products/TopFilter/sortFilterList';

const {
  SET_NUMBERS_PAGE,
  SET_CURRENT_PAGE,
  SET_TOTAL_PAGE,
  SET_SORT_FILTER,
  SET_PRICE_RANGE,
  REMOVE_FILTER,
} = require('./filter.type');

const initialProduct = {
  numbersPage: [1],
  currentPage: 1,
  totalPage: 1,
  sortFilter: sortFilterList[0],
  priceRange: { from: '', to: '' },
};

const productReducer = (state = initialProduct, action) => {
  switch (action.type) {
    case REMOVE_FILTER:
      return {
        ...state,
        numbersPage: [1],
        currentPage: 1,
        totalPage: 1,
        sortFilter: sortFilterList[0],
        priceRange: { from: '', to: '' },
      };
    case SET_NUMBERS_PAGE:
      return {
        ...state,
        numbersPage: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_TOTAL_PAGE:
      return {
        ...state,
        totalPage: action.payload,
      };
    case SET_SORT_FILTER:
      return {
        ...state,
        sortFilter: action.payload,
      };
    case SET_PRICE_RANGE:
      return {
        ...state,
        priceRange: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;

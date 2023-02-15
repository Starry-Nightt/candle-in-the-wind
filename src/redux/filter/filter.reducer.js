import sortFilterList from '~/modules/Products/TopFilter/sortFilterList';

const {
  SET_NUMBERS_PAGE,
  SET_CURRENT_PAGE,
  SET_TOTAL_PAGE,
  SET_SORT_FILTER,
  SET_PRICE_RANGE,
  SET_SEARCH_VALUE,
  REMOVE_FILTER,
} = require('./filter.type');

const initialFilter = {
  numbersPage: [1],
  currentPage: 1,
  totalPage: 1,
  sortFilter: sortFilterList[0],
  searchValue: '',
  priceRange: { from: '', to: '' },
};

const filterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case REMOVE_FILTER:
      return {
        ...state,
        numbersPage: [1],
        currentPage: 1,
        totalPage: 1,
        sortFilter: sortFilterList[0],
        searchValue: '',
        priceRange: { from: '', to: '' },
      };
    case SET_NUMBERS_PAGE:
      return {
        ...state,
        numbersPage: action.payload,
      };
    case SET_CURRENT_PAGE:
      let tmp = action.payload;
      tmp = tmp >= 1 ? tmp : 1;
      tmp = tmp <= state.totalPage ? tmp : state.totalPage;
      return {
        ...state,
        currentPage: tmp,
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
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;

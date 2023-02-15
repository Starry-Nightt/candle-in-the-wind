const {
  SET_NUMBERS_PAGE,
  SET_CURRENT_PAGE,
  SET_TOTAL_PAGE,
  SET_SORT_FILTER,
  SET_PRICE_RANGE,
  REMOVE_FILTER,
} = require('./filter.type');

const setNumbersPage = (numbersPage) => {
  return {
    type: SET_NUMBERS_PAGE,
    payload: numbersPage,
  };
};

const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: currentPage,
  };
};

const setTotalPage = (totalPage) => {
  return {
    type: SET_TOTAL_PAGE,
    payload: totalPage,
  };
};

const setSortFilter = (sortFilter) => {
  return {
    type: SET_SORT_FILTER,
    payload: sortFilter,
  };
};

const setPriceRange = (priceRange) => {
  return {
    type: SET_PRICE_RANGE,
    payload: priceRange,
  };
};

const fetchProductFailure = () => {
  return {
    type: REMOVE_FILTER,
  };
};

export {
  setNumbersPage,
  setCurrentPage,
  setTotalPage,
  setSortFilter,
  setPriceRange,
  fetchProductFailure,
};

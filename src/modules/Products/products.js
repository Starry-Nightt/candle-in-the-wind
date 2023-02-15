import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProduct } from '~/redux/product/product.thunk';
import Spinner from '@components/spinner/spinner';
import ProductItem from './ProductItem/ProductItem';
import classNames from 'classnames/bind';

import styles from './Products.module.scss';
import Filter from './Filter/Filter';
import PageNumber from './PageNumber/PageNumber';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import TopFilter from './TopFilter/TopFilter';
import { useLocation, useSearchParams } from 'react-router-dom';
import NotFoundProduct from './NotFoundProduct/NotFoundProduct';
import {
  removeFilter,
  setCurrentPage,
  setNumbersPage,
  setSearchValue,
  setTotalPage,
} from '~/redux/filter/filter.action';

const cx = classNames.bind(styles);

function Products() {
  const { loading, product, error } = useSelector((state) => state.product);
  const { numbersPage, currentPage, totalPage, sortFilter, priceRange, searchValue } = useSelector(
    (state) => state.filter,
  );
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const [a] = useSearchParams();
  if (a.get('search') === '') dispatch(removeFilter());

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [pathname, sortFilter]);

  useEffect(() => {
    dispatch(setSearchValue(''));
  }, [pathname]);

  useEffect(() => {
    dispatch(loadProduct(pathname.slice(10), currentPage, sortFilter, priceRange, searchValue));
  }, [pathname, currentPage, sortFilter, priceRange, searchValue]);

  useEffect(() => {
    if (product) {
      let total;
      total = Math.ceil(product.total / 30);
      if (Number.isNaN(total)) dispatch(setTotalPage(1));
      else dispatch(setTotalPage(total));
    }
  }, [product]);

  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= 5; i++) {
      if (i > totalPage) break;
      else arr.push(i);
    }
    dispatch(setNumbersPage(arr));
  }, [totalPage]);

  useEffect(() => {
    let arr = [];
    if (totalPage <= 5) return;

    if (currentPage >= numbersPage[numbersPage.length - 1] && currentPage < totalPage) {
      if (totalPage - currentPage >= 2) {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          arr.push(i);
        }
      } else {
        for (let i = totalPage - 4; i <= totalPage; i++) {
          arr.push(i);
        }
      }
      dispatch(setNumbersPage(arr));
    } else if (currentPage <= numbersPage[0] && currentPage < totalPage) {
      if (currentPage > 2) {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          arr.push(i);
        }
      } else {
        for (let i = 1; i <= 5; i++) {
          arr.push(i);
        }
      }
      dispatch(setNumbersPage(arr));
    }
  }, [currentPage]);

  return (
    <>
      <div className="row ">
        <div className="col l-2 m-12 c-12">
          <Filter />
        </div>

        <div className="col l-10 m-12 c-12 ">
          <div className={cx('filter-wrapper')}>
            <TopFilter />
          </div>

          <div className={cx('row sm-gutter')} style={{ minHeight: 200 }}>
            {loading && <Spinner />}
            {error && <h3>Error</h3>}
            {!totalPage && <NotFoundProduct />}
            {product &&
              product.products &&
              product.products.length > 0 &&
              product.products.map((item) => (
                <ProductItem key={item.id} data={item} pathname={pathname} />
              ))}
          </div>

          <div className={cx('page')}>
            <PageNumber noneMargin={true}>
              <FontAwesomeIcon
                onClick={() => dispatch(setCurrentPage(currentPage - 1))}
                icon={faCaretLeft}
              />
            </PageNumber>

            {numbersPage.map((numberPage) => {
              return <PageNumber key={numberPage} numberPage={numberPage} />;
            })}

            <PageNumber noneMargin={true}>
              <FontAwesomeIcon
                onClick={() => dispatch(setCurrentPage(currentPage + 1))}
                icon={faCaretRight}
              />
            </PageNumber>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;

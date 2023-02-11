import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
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
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function Products() {
  const { loading, product, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const [numbersPage, setNumbersPage] = useState([1]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  useEffect(() => {
    setCurrentPage(1);
  }, [pathname]);

  useEffect(() => {
    dispatch(loadProduct(pathname.slice(10), (currentPage - 1) * 30));
  }, [pathname, currentPage]);

  useEffect(() => {
    if (product) setTotalPage(Math.ceil(product.total / 30));
  }, [product]);

  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= 5; i++) {
      if (i > totalPage) break;
      else arr.push(i);
    }
    setNumbersPage(arr);
  }, [totalPage]);

  useEffect(() => {
    let arr = [];
    if (totalPage <= 5) return;

    if (currentPage === numbersPage[numbersPage.length - 1] && currentPage < totalPage) {
      if (totalPage - currentPage >= 2) {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          arr.push(i);
        }
      } else {
        for (let i = totalPage - 4; i <= totalPage; i++) {
          arr.push(i);
        }
      }
      setNumbersPage(arr);
    } else if (currentPage === numbersPage[0] && currentPage < totalPage) {
      if (currentPage > 2) {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          arr.push(i);
        }
      } else {
        for (let i = 1; i <= 5; i++) {
          arr.push(i);
        }
      }
      setNumbersPage(arr);
    }
  }, [currentPage]);

  
  return (
    <>
      <div className="row">
        <div className={cx('column-2')}>
          <Filter />
        </div>
        <div className={cx('column-10')}>
          <div className={cx('filter-wrapper')}>
            <TopFilter
              totalPage={totalPage}
              setNumbersPage={setNumbersPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <div className={cx('product-list')}>
            {loading && <Spinner />}
            {error && <h3>Error</h3>}
            {product &&
              product.products &&
              product.products.length > 0 &&
              product.products.map((item, index) => (
                <ProductItem key={item.id} data={item} pathname={pathname} />
              ))}
          </div>
        </div>
      </div>
      <div className={cx('page')}>
        <PageNumber>
          <FontAwesomeIcon
            onClick={() =>
              setCurrentPage((prev) => {
                return prev > 1 ? prev - 1 : prev;
              })
            }
            icon={faCaretLeft}
          />
        </PageNumber>
        {numbersPage.map((numberPage) => {
          return (
            <PageNumber
              key={numberPage}
              currentPage={currentPage}
              onClick={() => setCurrentPage(numberPage)}
            >
              {numberPage}
            </PageNumber>
          );
        })}
        <PageNumber>
          <FontAwesomeIcon
            onClick={() =>
              setCurrentPage((prev) => {
                return prev < totalPage ? prev + 1 : prev;
              })
            }
            icon={faCaretRight}
          />
        </PageNumber>
      </div>
    </>
  );
}

export default Products;

import React, { useEffect, useState } from 'react';
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
import sortFilterList from './TopFilter/sortFilterList';

const cx = classNames.bind(styles);

function Products() {
  const { loading, product, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const [numbersPage, setNumbersPage] = useState([1]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [sortFilter, setSortFilter] = useState(sortFilterList[0]);
  const [priceRange, setPriceRange] = useState({ from: '', to: '' });

  const [a] = useSearchParams();
  const searchValue = a.get('search');

  useEffect(() => {
    setCurrentPage(1);
  }, [pathname, sortFilter]);

  useEffect(() => {
    dispatch(
      loadProduct(pathname.slice(10), (currentPage - 1) * 30, searchValue, sortFilter, priceRange),
    );
  }, [pathname, currentPage, sortFilter, priceRange]);

  useEffect(() => {
    if (product) {
      let total;
      total = Math.ceil(product.total / 30);
      if (Number.isNaN(total)) setTotalPage(1);
      else setTotalPage(total);
    }
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
      setNumbersPage(arr);
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
      setNumbersPage(arr);
    }
  }, [currentPage]);

  return (
    <>
      <div className="row">
        <div className="col l-2 m-12 c-12">
          <Filter setPriceRange={setPriceRange} />
        </div>
        <div className="col l-10 m-12 c-12">
          <div className={cx('filter-wrapper')}>
            <TopFilter
              sortFilter={sortFilter}
              setSortFilter={setSortFilter}
              totalPage={totalPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <div className={cx('row')}>
            {loading && <Spinner />}
            {error && <h3>Error</h3>}
            {!totalPage && <NotFoundProduct />}
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

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

const cx = classNames.bind(styles);

function Products() {
  const productState = useSelector((state) => state.product);
  const { loading, product, error } = productState;
  const dispatch = useDispatch();

  const [numbersPage, setNumbersPage] = useState([1, 2, 3, 4, 5]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(loadProduct());
  }, []);

  return (
    <>
      <div className="row">
        <div className={cx('filter')}>
          <Filter />
        </div>
        <div className={cx('product')}>
          {loading && <Spinner />}
          {error && <h3>Error</h3>}
          {/* jsonserver tra ve  */}
          {product &&
            product.products &&
            product.products.length > 0 &&
            product.products.map((item, index) =>
              index < currentPage * 15 && index >= (currentPage - 1) * 15 ? (
                <ProductItem key={item.id} data={item} />
              ) : null,
            )}
        </div>
      </div>
      <div className={cx('page')}>
        <PageNumber>
          <FontAwesomeIcon
            onClick={() =>
              setCurrentPage((prev) => {
                return prev > numbersPage[0] ? prev - 1 : prev;
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
                return prev < numbersPage[4] ? prev + 1 : prev;
              })
            }
            icon={faCaretRight}
          />
        </PageNumber>
      </div>
    </>
  );
}

export default connect()(Products);

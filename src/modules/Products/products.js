import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { loadProduct } from '~/redux/product/product.thunk';
import Spinner from '@components/spinner/spinner';
import ProductItem from './ProductItem/ProductItem';
import classNames from 'classnames/bind';

import styles from './Products.module.scss';
import Filter from './Filter/Filter';
import PageNumber from './PageNumber/PageNumber';

const cx = classNames.bind(styles);

function Products() {
  const productState = useSelector((state) => state.product);
  const { loading, product, error } = productState;
  const dispatch = useDispatch();
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
          {product &&
            product.products &&
            product.products.length > 0 &&
            product.products.map((item) => <ProductItem key={item.id} data={item} /> )}
        </div>
      </div>
      <div className={cx('page')}>
        <PageNumber />
        <PageNumber />
        <PageNumber />
        <PageNumber />
        <PageNumber />
      </div>
    </>
    // <div>
    //   <h2>Product List</h2>
    //   {loading && <Spinner />}
    //   {error && <h3>Error</h3>}
    //   {product &&
    //     product.products &&
    //     product.products.length > 0 &&
    //     product.products.map((item) => <p key={item.id}>{item.title}</p>)}
    // </div>
  );
}

export default connect()(Products);

import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './product-search-result.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductByKeyword } from '~/redux/product/product.thunk';
import Spinner from '@components/spinner/spinner';
import { useParams } from 'react-router-dom';
import Navigator from '~/shared/components/paginator/paginator';
import ProductList from '../product-list/product-list';

const cx = classNames.bind(styles);

const PRODUCT_PER_PAGE = 8;

function ProductSearchResult() {
  const { loading, product, error } = useSelector((state) => state.product);
  const { keyword } = useParams();
  const [totalPage, setTotalPage] = useState(
    product?.products?.length ? Math.floor(product?.products?.length / PRODUCT_PER_PAGE) + 1 : 1,
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [displayProduct, setDisplayProduct] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setCurrentPage(1);
  }, []);

  useEffect(() => {
    dispatch(loadProductByKeyword(keyword));
  }, [keyword]);

  useEffect(() => {
    if (product?.products) {
      setCurrentPage(1);
      const prodList = [];
      for (let i = 0; i < PRODUCT_PER_PAGE && i < product.products?.length; i++) {
        prodList.push(product.products[i]);
      }
      setDisplayProduct(prodList);
    }
    setTotalPage(
      product?.products?.length ? Math.floor(product?.products?.length / PRODUCT_PER_PAGE) + 1 : 1,
    );
  }, [product]);

  useEffect(() => {
    if (product?.products) {
      const tmp = (currentPage - 1) * PRODUCT_PER_PAGE;
      const prodList = [];
      for (let i = tmp; i < tmp + PRODUCT_PER_PAGE && i < product.products?.length; i++) {
        prodList.push(product.products[i]);
      }
      setDisplayProduct(prodList);
    }
  }, [currentPage]);
  return (
    <>
      <div className="row ">
        <div className="col l-12 m-12 c-12 ">
          <div className={cx('row sm-gutter')}>
            {loading && <Spinner />}
            {error && <h3>Error</h3>}
            <ProductList products={displayProduct} />
          </div>
          <div className={cx('page')}>
            <Navigator
              products={product}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              numberPage={totalPage}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSearchResult;
